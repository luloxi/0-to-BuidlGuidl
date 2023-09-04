// Layout of Contract:
// version
// imports
// errors
// interfaces, libraries, contracts
// Type declarations
// State variables
// Events
// Modifiers
// Functions

// Layout of Functions:
// constructor
// receive function (if exists)
// fallback function (if exists)
// external
// public
// internal
// private
// view & pure functions

// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {Base64} from "@openzeppelin/contracts/utils/Base64.sol";
import {ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MoodNft is ERC721, ERC721Enumerable, Ownable {
    error ERC721Metadata__URI_QueryFor_NonExistentToken();
    error MoodNft__CantFlipMoodIfNotOwner();
    error MoodNft__CantTransferIfNotOwner();

    // enum NFTState {
    //     HAPPY,
    //     SAD
    // }

    uint256 private s_tokenCounter;

    // mapping(uint256 => NFTState) private s_tokenIdToState;
    mapping(uint256 => uint256) private s_tokenIdToBlockNumber;
    mapping(uint256 => address) private s_tokenIdToTokenMinter;
    mapping(uint256 => uint256) private s_tokenIdToDonation;

    event CreatedNFT(uint256 indexed tokenId);

    constructor() ERC721("0-to-BuidlGuidl Donation", "0BGD") {
        s_tokenCounter = 0;
    }

    function mintNft() public payable {
        // Record the block number when minting
        uint256 mintedBlockNumber = block.number;
        address tokenMinter = msg.sender;
        uint256 donatedAmount = msg.value;

        // how would you require payment for this NFT?
        _safeMint(msg.sender, s_tokenCounter);
        s_tokenIdToBlockNumber[s_tokenCounter] = mintedBlockNumber;
        s_tokenIdToTokenMinter[s_tokenCounter] = tokenMinter;
        s_tokenIdToDonation[s_tokenCounter] = donatedAmount;
        s_tokenCounter = s_tokenCounter + 1;
        emit CreatedNFT(s_tokenCounter);
    }

    // function flipMood(uint256 tokenId) public {
    //     if (!_isApprovedOrOwner(msg.sender, tokenId)) {
    //         revert MoodNft__CantFlipMoodIfNotOwner();
    //     }

    //     if (s_tokenIdToState[tokenId] == NFTState.HAPPY) {
    //         s_tokenIdToState[tokenId] = NFTState.SAD;
    //     } else {
    //         s_tokenIdToState[tokenId] = NFTState.HAPPY;
    //     }
    // }

    function tokenURI(uint256 id) public view override returns (string memory) {
        return _buildTokenURI(id);
    }

    // Constructs the encoded svg string to be returned by tokenURI()
    function _buildTokenURI(uint256 id) internal view returns (string memory) {
        // bool minted = _exists(id);

        address tokenMinter = s_tokenIdToTokenMinter[id];
        uint256 mintedBlockNumber = s_tokenIdToBlockNumber[id];
        uint256 donatedAmount = s_tokenIdToDonation[id];

        bytes memory image = abi.encodePacked(
            "data:image/svg+xml;base64,",
            Base64.encode(
                bytes(
                    abi.encodePacked(
                        '<?xml version="1.0" encoding="UTF-8"?>',
                        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">',
                        '<style type="text/css"><![CDATA[text {font-family: monospace; font-size: 21px; fill: #ffffff;} .h1 {font-size: 40px; font-weight: 600; fill: #ffffff;}]]></style>',
                        '<rect width="400" height="400" fill="#2A3655" />',
                        '<text class="h1" x="20" y="50">0 to BuidlGuidl</text>',
                        unicode'<text x="40" y="165" style="font-size:100px;">🐣 🏰</text>',
                        '<text x="20" y="230">On block #',
                        Strings.toString(mintedBlockNumber),
                        "</text>",
                        '<text x="20" y="260" style="font-size:14px;">0x',
                        addressToString(tokenMinter),
                        "</text>",
                        unicode'<text x="20" y="300">Donated Ξ ',
                        Strings.toString(donatedAmount),
                        "</text>",
                        // streamBalance,
                        // unicode'<text x="20" y="305">Wallet Ξ',
                        // // weiToEtherString(boundAddress.balance),
                        // "</text>",
                        '<text x="20" y="350" style="font-size:28px;"> ',
                        // lookupENSName(boundAddress),
                        "</text>",
                        "</svg>"
                    )
                )
            )
        );
        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(
                    bytes(
                        abi.encodePacked(
                            '{"name":"0-to-BuidlGuidl Donation", "image":"',
                            image,
                            unicode'", "description": "This NFT marks the bound address as a member of the BuidlGuidl. The image is a fully-onchain dynamic SVG reflecting current balances of the bound wallet and builder work stream."}'
                        )
                    )
                )
            )
        );
    }

    function addressToString(address x) internal pure returns (string memory) {
        bytes memory s = new bytes(40);
        for (uint256 i = 0; i < 20; i++) {
            bytes1 b = bytes1(uint8(uint256(uint160(x)) / (2 ** (8 * (19 - i)))));
            bytes1 hi = bytes1(uint8(b) / 16);
            bytes1 lo = bytes1(uint8(b) - 16 * uint8(hi));
            s[2 * i] = char(hi);
            s[2 * i + 1] = char(lo);
        }
        return string(s);
    }

    function char(bytes1 b) internal pure returns (bytes1 c) {
        if (uint8(b) < 10) return bytes1(uint8(b) + 0x30);
        else return bytes1(uint8(b) + 0x57);
    }

    // function _baseURI() internal pure override returns (string memory) {
    //     return "data:application/json;base64,";
    // }

    // function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    //     if (!_exists(tokenId)) {
    //         revert ERC721Metadata__URI_QueryFor_NonExistentToken();
    //     }
    //     string memory imageURI = s_happySvgUri;

    //     if (s_tokenIdToState[tokenId] == NFTState.SAD) {
    //         imageURI = s_sadSvgUri;
    //     }
    //     return string(
    //         abi.encodePacked(
    //             _baseURI(),
    //             Base64.encode(
    //                 bytes(
    //                     abi.encodePacked(
    //                         '{"name":"',
    //                         name(), // You can add whatever name here
    //                         '", "description":"An NFT that reflects the mood of the owner, 100% on Chain!", ',
    //                         '"attributes": [{"trait_type": "moodiness", "value": 100}], "image":"',
    //                         imageURI,
    //                         '"}'
    //                     )
    //                 )
    //             )
    //         )
    //     );
    // }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }

    function transfer(address to, uint256 tokenId) public {
        // we only want the NFT owner to be able to transfer
        if (!_isApprovedOrOwner(msg.sender, tokenId)) {
            revert MoodNft__CantTransferIfNotOwner();
        }

        _transfer(msg.sender, to, tokenId);
    }

    // You could also just upload the raw SVG and have solildity convert it!
    function svgToImageURI(string memory svg) public pure returns (string memory) {
        // example:
        // '<svg width="500" height="500" viewBox="0 0 285 350" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="black" d="M150,0,L75,200,L225,200,Z"></path></svg>'
        // would return ""
        string memory baseURL = "data:image/svg+xml;base64,";
        string memory svgBase64Encoded = Base64.encode(bytes(string(abi.encodePacked(svg))));
        return string(abi.encodePacked(baseURL, svgBase64Encoded));
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 firstTokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, firstTokenId, batchSize);

        // Add your custom logic here if needed before token transfer
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}

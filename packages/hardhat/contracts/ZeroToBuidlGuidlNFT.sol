// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {Base64} from "@openzeppelin/contracts/utils/Base64.sol";

error ZeroToBuidlGuidlNFT__CantSwitchThemeIfNotOwner();
error ZeroToBuidlGuidlNFT__CantTransferIfNotOwner();
error ZeroToBuidlGuidlNFT__KeepIt_YouNeedItMore();
error ZeroToBuidlGuidlNFT__NoBalanceToWithdraw();
error ZeroToBuidlGuidlNFT__WithdrawFailed();

enum Theme {
    DARK,
    LIGHT
}

contract ZeroToBuidlGuidlNFT is ERC721 {
    uint256 private s_tokenCounter;
    address public curatorAddress;
    address public buidlguidlAddress;

    mapping(uint256 => Theme) private s_tokenIdToTheme;
    mapping(uint256 => uint256) private s_tokenIdToBlockNumber;
    mapping(uint256 => address) private s_tokenIdToTokenMinter;
    mapping(uint256 => uint256) private s_tokenIdToDonation;

    event CreatedNFT(uint256 indexed tokenId);

    constructor(address _curatorAddress, address _buidlguidlAddress) ERC721("0-to-BuidlGuidl Donation", "0BGD") {
        curatorAddress = _curatorAddress;
        buidlguidlAddress = _buidlguidlAddress;
        s_tokenCounter = 0;
    }

    receive() external payable {
        mintNft();
    }

    fallback() external payable {
        mintNft();
    }

    function mintNft() public payable {
        if (msg.value < 0.01 ether) {
            revert ZeroToBuidlGuidlNFT__KeepIt_YouNeedItMore();
        }

        uint256 mintedBlockNumber = block.number;
        address tokenMinter = msg.sender;
        uint256 donatedAmount = msg.value;

        _safeMint(msg.sender, s_tokenCounter);
        s_tokenIdToTheme[s_tokenCounter] = Theme.DARK;
        s_tokenIdToBlockNumber[s_tokenCounter] = mintedBlockNumber;
        s_tokenIdToTokenMinter[s_tokenCounter] = tokenMinter;
        s_tokenIdToDonation[s_tokenCounter] = donatedAmount;
        s_tokenCounter = s_tokenCounter + 1;
        emit CreatedNFT(s_tokenCounter);
    }

    function transfer(address to, uint256 tokenId) public {
        if (!_isApprovedOrOwner(msg.sender, tokenId)) {
            revert ZeroToBuidlGuidlNFT__CantTransferIfNotOwner();
        }

        _transfer(msg.sender, to, tokenId);
    }

    function switchTheme(uint256 tokenId) public {
        if (!_isApprovedOrOwner(msg.sender, tokenId)) {
            revert ZeroToBuidlGuidlNFT__CantSwitchThemeIfNotOwner();
        }

        if (s_tokenIdToTheme[tokenId] == Theme.DARK) {
            s_tokenIdToTheme[tokenId] = Theme.LIGHT;
        } else {
            s_tokenIdToTheme[tokenId] = Theme.DARK;
        }
    }

    function withdrawFunds() public {
        uint256 contractBalance = address(this).balance;
        if (contractBalance == 0) {
            revert ZeroToBuidlGuidlNFT__NoBalanceToWithdraw();
        }

        uint256 curatorShare = contractBalance / 2;
        uint256 buidlguidlShare = contractBalance - curatorShare;

        (bool curatorSuccess,) = payable(curatorAddress).call{value: curatorShare}("");
        if (!curatorSuccess) {
            revert ZeroToBuidlGuidlNFT__WithdrawFailed();
        }

        (bool buidlguidlSuccess,) = payable(buidlguidlAddress).call{value: buidlguidlShare}("");
        if (!buidlguidlSuccess) {
            revert ZeroToBuidlGuidlNFT__WithdrawFailed();
        }
    }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }

    function tokenURI(uint256 id) public view override returns (string memory) {
        return _buildTokenURI(id);
    }

    // Constructs the encoded svg string to be returned by tokenURI()
    function _buildTokenURI(uint256 id) internal view returns (string memory) {
        address tokenMinter = s_tokenIdToTokenMinter[id];
        uint256 mintedBlockNumber = s_tokenIdToBlockNumber[id];
        uint256 donatedAmount = s_tokenIdToDonation[id];

        Theme currentTheme = s_tokenIdToTheme[id];
        string memory backgroundColor = (currentTheme == Theme.DARK) ? "#2A3655" : "#F5F5F5";
        string memory textColor = (currentTheme == Theme.DARK) ? "#F5F5F5" : "#2A3655";

        bytes memory image = abi.encodePacked(
            "data:image/svg+xml;base64,",
            Base64.encode(
                bytes(
                    abi.encodePacked(
                        '<?xml version="1.0" encoding="UTF-8"?>',
                        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">',
                        '<style type="text/css"><![CDATA[text {font-family: monospace; font-size: 21px; fill: ',
                        textColor,
                        ";} .h1 {font-size: 40px; font-weight: 600; fill: ",
                        textColor,
                        ";}]]></style>",
                        '<rect width="400" height="400" fill="',
                        backgroundColor,
                        '" />',
                        '<text x="20" y="40">On block #',
                        Strings.toString(mintedBlockNumber),
                        "</text>",
                        '<text x="20" y="70" style="font-size:14px;">0x',
                        addressToString(tokenMinter),
                        "</text>",
                        '<text x="20" y="105">found wisdom in</text>',
                        '<text class="h1" x="20" y="160">0 to BuidlGuidl</text>',
                        unicode'<text x="20" y="200">and donated Ξ ',
                        weiToEtherString(donatedAmount),
                        "</text>",
                        unicode'<text x="40" y="285" style="font-size:70px;">🐣...🏰</text>',
                        unicode'<text x="20" y="340">Thanks for the wei,</text>',
                        unicode'<text x="20" y="370">and good luck on your way!</text>',
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
                            '{"name":"',
                            name(),
                            '", "image":"',
                            image,
                            unicode'", "description": "Consider this NFT as an eternal thank you note for your donation. Hope to see you building with us in the future! <3"}'
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

    /// @notice  Converts wei to ether string with 2 decimal places
    function weiToEtherString(uint256 amountInWei) internal pure returns (string memory) {
        uint256 amountInFinney = amountInWei / 1e15; // 1 finney == 1e15
        return string(
            abi.encodePacked(
                Strings.toString(amountInFinney / 1000), // integer (left of decimal)
                ".",
                Strings.toString((amountInFinney % 1000) / 100), // first decimal
                Strings.toString(((amountInFinney % 1000) % 100) / 10) // second decimal
            )
        );
    }
}

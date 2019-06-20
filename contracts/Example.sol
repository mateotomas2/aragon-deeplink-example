pragma solidity ^0.4.24;

import "@aragon/os/contracts/apps/AragonApp.sol";


/* This is only a dummy contract to make Aragon happy
when it looks for a standard aragon app structure */
contract Example is AragonApp {

    bytes32 constant public EXAMPLE_ROLE = keccak256("EXAMPLE_ROLE");
    function initialize() public onlyInit {
        initialized();
    }
}
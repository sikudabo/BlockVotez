// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract BlockVotez {
  // Variable to determine the creator of the contract based on who deploys it.
  address public blockVotezCreator;
  /* We need a struct for the options type. The options for each election need to have a unique name and a count. We can calculate the count when we send data back to the client, which will be a route on our Express server */// @title A title that should describe the contract/interface */
  struct OptionsType {
    string optionName;
    uint count;
  }

  /* We need a struct for voters. They will need a firstName, lastName, choice, uniqueUserId, and companyId. Later, they may need more meta data */
  struct VoterType {
    string firstName;
    string lastName;
    string uniqueUserId;
    string companyId;
    string choice;
  }
  /*We need an "Election" type that will store the data needed for each voting initiative
  */
  struct ElectionType {
    string electionName;
    string uniqueElectionId;
    string companyId;
    mapping(string => VoterType) votersMapping;
    VoterType[] voters; //We need an array since it will cost a lot of gas to send a mapping back to the web3 client.
    mapping(string => OptionsType) optionsMapping;
    OptionsType[] options;
  }

  // Mapping for all ElectionType objects
  mapping(string => ElectionType) public elections;
  constructor() public {
    blockVotezCreator = msg.sender;
  }

  /* Function to create an election. Pass the needed props to create a new ElectionType instance and add it to the elections mapping */
  function createElection(string memory electionName, string memory uniqueElectionId, string memory companyId, OptionsType[] memory options) public {
    ElectionType memory newElection;
    newElection.electionName = electionName;
    newElection.uniqueElectionId = uniqueElectionId;
    newElection.companyId = companyId;
    newElection.options = options;
    elections[uniqueElectionId] = newElection;
  }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract FamilyWallet {
    address public owner;
    mapping(address => bool) public familyMembers;
    mapping(address => uint256) public allowances;
    mapping(address => uint256) public balances;

    event MemberAdded(address indexed member);
    event MemberRemoved(address indexed member);
    event AllowanceSet(address indexed member, uint256 amount);
    event FundsDeposited(address indexed member, uint256 amount);
    event FundsWithdrawn(address indexed member, uint256 amount);
    event EmergencyWithdrawal(address indexed owner, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier onlyFamilyMember() {
        require(familyMembers[msg.sender], "Not a family member");
        _;
    }

    constructor() {
        owner = msg.sender; // Set the contract deployer as the owner
    }

    // Add a family member
    function addFamilyMember(address member) external onlyOwner {
        require(!familyMembers[member], "Already a family member");
        familyMembers[member] = true;
        emit MemberAdded(member);
    }

    // Remove a family member
    function removeFamilyMember(address member) external onlyOwner {
        require(familyMembers[member], "Not a family member");
        familyMembers[member] = false;
        emit MemberRemoved(member);
    }

    // Set allowance for a family member
    function setAllowance(address member, uint256 amount) external onlyOwner {
        allowances[member] = amount;
        emit AllowanceSet(member, amount);
    }

    // Deposit funds into the wallet
    function depositFunds() external payable onlyFamilyMember {
        balances[msg.sender] += msg.value;
        emit FundsDeposited(msg.sender, msg.value);
    }

    // Withdraw funds from the wallet
    function withdrawFunds(uint256 amount) external onlyFamilyMember {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        require(amount <= allowances[msg.sender], "Amount exceeds allowance");

        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
        emit FundsWithdrawn(msg.sender, amount);
    }

    // Get the balance of the caller
    function getBalance() external view onlyFamilyMember returns (uint256) {
        return balances[msg.sender];
    }

    // Emergency withdrawal by the owner
    function emergencyWithdraw(uint256 amount) external onlyOwner {
        require(address(this).balance >= amount, "Insufficient contract balance");
        payable(owner).transfer(amount);
        emit EmergencyWithdrawal(owner, amount);
    }

    // Get the total balance of the contract
    function getTotalBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
const ZeroVerseEngine = (() => {
  const CONFIG = {
    BASE_REWARD_RATE: 0.01,
    DECAY_RATE: 0.0005,
    MAX_SUPPLY_ZRC: 1_000_000,
    NODE_TIERS: {
      MEMBER: 1.0,
      FOUNDER: 1.5,
      WHALE: 2.0
    }
  };

  const state = {
    totalSupplyZRC: 0,
    users: {}
  };

  function getNodeMultiplier(nodeType) {
    return CONFIG.NODE_TIERS[nodeType] || CONFIG.NODE_TIERS.MEMBER;
  }

  function applyDecay(amount, days) {
    return amount * Math.exp(-CONFIG.DECAY_RATE * days);
  }

  function applyStabilityLayers(reward) {
    reward *= 0.98;
    reward *= 0.99;
    reward *= 0.97;
    return reward;
  }

  function registerUser(userId, nodeType = 'MEMBER') {
    if (!state.users[userId]) {
      state.users[userId] = {
        balance: 0,
        nodeType
      };
    }
  }

  function simulateDailyReward(userId, daysActive = 1) {
    const user = state.users[userId];
    if (!user) return 0;

    let reward = CONFIG.BASE_REWARD_RATE * getNodeMultiplier(user.nodeType) * daysActive;
    reward = applyDecay(reward, daysActive);
    reward = applyStabilityLayers(reward);

    if (state.totalSupplyZRC + reward > CONFIG.MAX_SUPPLY_ZRC) {
      return 0;
    }

    user.balance += reward;
    state.totalSupplyZRC += reward;

    return reward;
  }

  function getUserBalance(userId) {
    const user = state.users[userId];
    return user ? user.balance : 0;
  }

  function getStats() {
    return {
      totalSupplyZRC: state.totalSupplyZRC,
      userCount: Object.keys(state.users).length
    };
  }

  function setNodeType(userId, nodeType) {
    const user = state.users[userId];
    if (!user) return;
    user.nodeType = nodeType;
  }

  function resetUser(userId) {
    const user = state.users[userId];
    if (!user) return;
    user.balance = 0;
  }

  function getAllUsers() {
    return Object.entries(state.users).map(([id, data]) => ({
      userId: id,
      balance: data.balance,
      nodeType: data.nodeType
    }));
  }

  function getUserAchievements(userId) {
    const user = state.users[userId];
    if (!user) return [];

    const achievements = [];
    if (user.balance > 0) achievements.push("First Reward");
    if (user.balance > 1) achievements.push("10+ Rewards");
    if (user.balance > 10) achievements.push("100+ Rewards");
    if (user.nodeType === "FOUNDER") achievements.push("Founder Status");
    if (user.nodeType === "WHALE") achievements.push("Whale Status");
    if (state.totalSupplyZRC > 1000) achievements.push("Supply Contributor");
    return achievements;
  }

  function getUserProgression(userId) {
    const balance = getUserBalance(userId);
    if (balance < 1) return "Novice";
    if (balance < 5) return "Apprentice";
    if (balance < 20) return "Adept";
    if (balance < 50) return "Expert";
    if (balance < 100) return "Master";
    return "Ascendant";
  }

  return {
    CONFIG,
    registerUser,
    simulateDailyReward,
    getUserBalance,
    getStats,
    setNodeType,
    resetUser,
    getAllUsers,
    getUserAchievements,
    getUserProgression
  };
})();

export default ZeroVerseEngine;

// LPO Ranking Visualization - Data & Computation Layer
// =====================================================

const PRODUCTS = [
  { id: "800000892525", position: 1, lpoScore: 286.103, clicks: 2063, carts: 3492, purchases: 624, ctr: 0.07875, convRate: 0.02408, clicksDaily: 66.55, cartsDaily: 112.65, purchasesDaily: 19.74, trendClicks: 0.0649, trendPurchases: -0.1032, trendCarts: -0.7073, ctrBrand: 0.03293 },
  { id: "1877089602", position: 2, lpoScore: 239.488, clicks: 1534, carts: 207, purchases: 24, ctr: 0.07969, convRate: 0.001299, clicksDaily: 49.48, cartsDaily: 6.68, purchasesDaily: 0.80, trendClicks: 1.979, trendPurchases: 0.02320, trendCarts: 0.09811, ctrBrand: 0.032247 },
  { id: "812012701", position: 3, lpoScore: 229.772, clicks: 6138, carts: 371, purchases: 32, ctr: 0.06022, convRate: 0.000334, clicksDaily: 198.00, cartsDaily: 11.97, purchasesDaily: 1.03, trendClicks: 3.107, trendPurchases: -0.00511, trendCarts: 0.08387, ctrBrand: 0.029894 },
  { id: "800001071698", position: 4, lpoScore: 217.236, clicks: 6887, carts: 1011, purchases: 65, ctr: 0.05091, convRate: 0.000481, clicksDaily: 222.16, cartsDaily: 32.61, purchasesDaily: 2.10, trendClicks: 1.763, trendPurchases: -0.08881, trendCarts: -0.3310, ctrBrand: 0.025765 },
  { id: "1968011904", position: 5, lpoScore: 211.140, clicks: 908, carts: 28, purchases: 0, ctr: 0.10498, convRate: 0.0, clicksDaily: 29.29, cartsDaily: 0.90, purchasesDaily: 0.0, trendClicks: 0.9117, trendPurchases: 0.0, trendCarts: -0.00383, ctrBrand: 0.031701 },
  { id: "2300011401", position: 6, lpoScore: 208.067, clicks: 11971, carts: 1243, purchases: 117, ctr: 0.05690, convRate: 0.000585, clicksDaily: 386.16, cartsDaily: 40.10, purchasesDaily: 3.77, trendClicks: -2.949, trendPurchases: 0.02929, trendCarts: -0.3165, ctrBrand: 0.028848 },
  { id: "800000949961", position: 7, lpoScore: 207.975, clicks: 5652, carts: 224, purchases: 16, ctr: 0.04614, convRate: 0.000139, clicksDaily: 182.32, cartsDaily: 7.23, purchasesDaily: 0.62, trendClicks: 5.707, trendPurchases: 0.02353, trendCarts: 0.03952, ctrBrand: 0.031515 },
  { id: "2778000301", position: 8, lpoScore: 205.491, clicks: 1574, carts: 789, purchases: 197, ctr: 0.05036, convRate: 0.006494, clicksDaily: 50.77, cartsDaily: 25.45, purchasesDaily: 6.32, trendClicks: 0.03036, trendPurchases: 0.02797, trendCarts: -0.1447, ctrBrand: 0.02657 },
  { id: "800000952595", position: 9, lpoScore: 203.943, clicks: 12451, carts: 1497, purchases: 125, ctr: 0.07396, convRate: 0.000755, clicksDaily: 401.65, cartsDaily: 48.29, purchasesDaily: 4.03, trendClicks: -1.938, trendPurchases: -0.01976, trendCarts: 0.2524, ctrBrand: 0.076931 },
  { id: "2798023505", position: 10, lpoScore: 200.249, clicks: 1758, carts: 400, purchases: 43, ctr: 0.04441, convRate: 0.001112, clicksDaily: 56.71, cartsDaily: 12.90, purchasesDaily: 1.32, trendClicks: 1.229, trendPurchases: 0.00135, trendCarts: 0.06371, ctrBrand: 0.03149 },
  { id: "1136001401", position: 11, lpoScore: 199.470, clicks: 5097, carts: 770, purchases: 80, ctr: 0.03661, convRate: 0.000596, clicksDaily: 164.42, cartsDaily: 24.84, purchasesDaily: 2.58, trendClicks: 0.838, trendPurchases: -0.03406, trendCarts: -0.2520, ctrBrand: 0.026344 },
  { id: "800001091513", position: 12, lpoScore: 196.948, clicks: 981, carts: 475, purchases: 54, ctr: 0.05480, convRate: 0.003072, clicksDaily: 31.65, cartsDaily: 15.32, purchasesDaily: 1.77, trendClicks: 0.641, trendPurchases: 0.00863, trendCarts: -0.03911, ctrBrand: 0.035181 },
  { id: "3003307", position: 13, lpoScore: 189.968, clicks: 1898, carts: 883, purchases: 184, ctr: 0.04236, convRate: 0.004084, clicksDaily: 61.23, cartsDaily: 28.48, purchasesDaily: 5.61, trendClicks: 0.09879, trendPurchases: -0.02823, trendCarts: 0.02056, ctrBrand: 0.029462 },
  { id: "1458001202", position: 14, lpoScore: 185.829, clicks: 712, carts: 146, purchases: 20, ctr: 0.06060, convRate: 0.001533, clicksDaily: 22.97, cartsDaily: 4.71, purchasesDaily: 0.67, trendClicks: 1.209, trendPurchases: -0.01094, trendCarts: -0.05199, ctrBrand: 0.029484 },
  { id: "3009081", position: 15, lpoScore: 185.267, clicks: 1213, carts: 675, purchases: 88, ctr: 0.03771, convRate: 0.002829, clicksDaily: 39.13, cartsDaily: 21.77, purchasesDaily: 2.77, trendClicks: 1.105, trendPurchases: 0.03820, trendCarts: 0.1161, ctrBrand: 0.029331 },
  { id: "2781014901", position: 16, lpoScore: 184.867, clicks: 687, carts: 302, purchases: 40, ctr: 0.05161, convRate: 0.002855, clicksDaily: 22.16, cartsDaily: 9.74, purchasesDaily: 1.19, trendClicks: 0.590, trendPurchases: 0.03452, trendCarts: 0.08911, ctrBrand: 0.031754 },
  { id: "800000719799", position: 17, lpoScore: 184.525, clicks: 384, carts: 45, purchases: 3, ctr: 0.14955, convRate: 0.001174, clicksDaily: 14.77, cartsDaily: 1.50, purchasesDaily: 0.19, trendClicks: 0.490, trendPurchases: 0.0, trendCarts: 0.05174, ctrBrand: 0.039594 },
  { id: "800000646858", position: 18, lpoScore: 184.021, clicks: 3974, carts: 396, purchases: 33, ctr: 0.04660, convRate: 0.000399, clicksDaily: 128.19, cartsDaily: 12.77, purchasesDaily: 1.06, trendClicks: -1.130, trendPurchases: 0.00205, trendCarts: -0.01210, ctrBrand: 0.030536 },
  { id: "3009003", position: 19, lpoScore: 181.766, clicks: 2115, carts: 407, purchases: 33, ctr: 0.04929, convRate: 0.000816, clicksDaily: 68.23, cartsDaily: 13.13, purchasesDaily: 1.07, trendClicks: -0.777, trendPurchases: -0.00230, trendCarts: -0.00202, ctrBrand: 0.029058 },
  { id: "1749052001", position: 20, lpoScore: 181.071, clicks: 639, carts: 144, purchases: 23, ctr: 0.06422, convRate: 0.002212, clicksDaily: 20.61, cartsDaily: 4.65, purchasesDaily: 0.71, trendClicks: 0.183, trendPurchases: 0.00561, trendCarts: -0.01605, ctrBrand: 0.029492 },
  { id: "2991005002", position: 21, lpoScore: 180.448, clicks: 4425, carts: 766, purchases: 90, ctr: 0.04131, convRate: 0.000878, clicksDaily: 142.74, cartsDaily: 24.71, purchasesDaily: 2.87, trendClicks: -0.124, trendPurchases: -0.08976, trendCarts: -0.2560, ctrBrand: 0.028798 },
  { id: "3010901", position: 22, lpoScore: 179.312, clicks: 518, carts: 618, purchases: 115, ctr: 0.04834, convRate: 0.008207, clicksDaily: 16.71, cartsDaily: 19.94, purchasesDaily: 2.74, trendClicks: 0.242, trendPurchases: -0.03341, trendCarts: 0.02621, ctrBrand: 0.029508 },
  { id: "2220039001", position: 23, lpoScore: 179.123, clicks: 730, carts: 309, purchases: 53, ctr: 0.04556, convRate: 0.002933, clicksDaily: 23.55, cartsDaily: 9.97, purchasesDaily: 1.48, trendClicks: 0.485, trendPurchases: 0.00543, trendCarts: 0.025, ctrBrand: 0.029499 },
  { id: "800001200163", position: 24, lpoScore: 178.388, clicks: 836, carts: 151, purchases: 19, ctr: 0.05845, convRate: 0.001399, clicksDaily: 26.97, cartsDaily: 4.87, purchasesDaily: 0.66, trendClicks: 1.228, trendPurchases: 0.03417, trendCarts: 0.1823, ctrBrand: 0.037172 },
  { id: "2991004459", position: 25, lpoScore: 177.084, clicks: 5907, carts: 233, purchases: 23, ctr: 0.03439, convRate: 0.000134, clicksDaily: 190.55, cartsDaily: 7.52, purchasesDaily: 0.79, trendClicks: 1.792, trendPurchases: -0.01551, trendCarts: 0.03015, ctrBrand: 0.030369 },
  { id: "2615041202", position: 26, lpoScore: 175.801, clicks: 79, carts: 90, purchases: 9, ctr: 0.07846, convRate: 0.01087, clicksDaily: 8.78, cartsDaily: 9.0, purchasesDaily: 1.0, trendClicks: 3.087, trendPurchases: 0.2371, trendCarts: 0.497, ctrBrand: 0.031786 },
  { id: "2798022302", position: 27, lpoScore: 175.047, clicks: 968, carts: 365, purchases: 59, ctr: 0.03873, convRate: 0.002241, clicksDaily: 31.23, cartsDaily: 11.77, purchasesDaily: 1.81, trendClicks: 1.860, trendPurchases: 0.08923, trendCarts: 0.6355, ctrBrand: 0.03049 },
  { id: "1749095301", position: 28, lpoScore: 173.517, clicks: 133, carts: 307, purchases: 0, ctr: 0.05921, convRate: 0.0, clicksDaily: 8.87, cartsDaily: 10.23, purchasesDaily: 0.0, trendClicks: 2.469, trendPurchases: 0.0, trendCarts: 2.864, ctrBrand: 0.031789 },
  { id: "670002404", position: 29, lpoScore: 172.376, clicks: 2710, carts: 262, purchases: 25, ctr: 0.04525, convRate: 0.000418, clicksDaily: 87.42, cartsDaily: 8.45, purchasesDaily: 0.81, trendClicks: -0.608, trendPurchases: -0.02366, trendCarts: -0.1403, ctrBrand: 0.02942 },
  { id: "2300024403", position: 30, lpoScore: 170.247, clicks: 3384, carts: 125, purchases: 6, ctr: 0.03682, convRate: 0.0000655, clicksDaily: 109.16, cartsDaily: 4.03, purchasesDaily: 0.20, trendClicks: 3.471, trendPurchases: 0.0, trendCarts: 0.02379, ctrBrand: 0.029438 },
  { id: "2778000503", position: 31, lpoScore: 169.239, clicks: 1758, carts: 396, purchases: 103, ctr: 0.03465, convRate: 0.002030, clicksDaily: 56.71, cartsDaily: 12.77, purchasesDaily: 3.29, trendClicks: 0.482, trendPurchases: 0.05288, trendCarts: 0.09798, ctrBrand: 0.026668 },
  { id: "800001200165", position: 32, lpoScore: 168.624, clicks: 389, carts: 132, purchases: 18, ctr: 0.10145, convRate: 0.004692, clicksDaily: 12.55, cartsDaily: 4.40, purchasesDaily: 0.60, trendClicks: -0.351, trendPurchases: 0.05222, trendCarts: 0.1241, ctrBrand: 0.037471 },
  { id: "2257007001", position: 33, lpoScore: 168.576, clicks: 3053, carts: 274, purchases: 51, ctr: 0.03837, convRate: 0.000666, clicksDaily: 98.48, cartsDaily: 8.84, purchasesDaily: 1.61, trendClicks: -1.764, trendPurchases: 0.04583, trendCarts: -0.05565, ctrBrand: 0.031775 },
  { id: "3011002", position: 34, lpoScore: 167.100, clicks: 521, carts: 524, purchases: 75, ctr: 0.04919, convRate: 0.004436, clicksDaily: 16.81, cartsDaily: 16.90, purchasesDaily: 1.42, trendClicks: -0.148, trendPurchases: 0.02553, trendCarts: 0.1665, ctrBrand: 0.029507 },
  { id: "2778000211", position: 35, lpoScore: 166.582, clicks: 788, carts: 298, purchases: 54, ctr: 0.04409, convRate: 0.002629, clicksDaily: 25.42, cartsDaily: 9.61, purchasesDaily: 1.48, trendClicks: -0.00927, trendPurchases: -0.02076, trendCarts: -0.06855, ctrBrand: 0.026707 },
  { id: "1744000401", position: 36, lpoScore: 165.274, clicks: 1345, carts: 140, purchases: 19, ctr: 0.04376, convRate: 0.000554, clicksDaily: 43.39, cartsDaily: 4.52, purchasesDaily: 0.57, trendClicks: -0.125, trendPurchases: -0.00650, trendCarts: -0.06048, ctrBrand: 0.02948 },
  { id: "800001147040", position: 37, lpoScore: 163.964, clicks: 2888, carts: 185, purchases: 8, ctr: 0.03376, convRate: 0.0000938, clicksDaily: 93.16, cartsDaily: 5.97, purchasesDaily: 0.28, trendClicks: 5.321, trendPurchases: 0.0, trendCarts: 0.1972, ctrBrand: 0.027825 },
  { id: "800001174400", position: 38, lpoScore: 163.276, clicks: 1033, carts: 64, purchases: 1, ctr: 0.05248, convRate: 0.0000519, clicksDaily: 33.32, cartsDaily: 2.06, purchasesDaily: 0.13, trendClicks: 1.094, trendPurchases: 0.0, trendCarts: -0.01479, ctrBrand: 0.031894 },
  { id: "800001293942", position: 39, lpoScore: 162.319, clicks: 27, carts: 62, purchases: 6, ctr: 0.12243, convRate: 0.03534, clicksDaily: 3.86, cartsDaily: 6.89, purchasesDaily: 0.67, trendClicks: 2.187, trendPurchases: 0.0, trendCarts: 1.017, ctrBrand: 0.03605 },
  { id: "2220026711", position: 40, lpoScore: 161.466, clicks: 4196, carts: 151, purchases: 3, ctr: 0.04145, convRate: 0.0000298, clicksDaily: 135.35, cartsDaily: 4.87, purchasesDaily: 0.11, trendClicks: -1.936, trendPurchases: 0.0, trendCarts: -0.05837, ctrBrand: 0.031745 },
  { id: "1136005415", position: 41, lpoScore: 160.944, clicks: 549, carts: 2, purchases: 0, ctr: 0.09354, convRate: 0.0, clicksDaily: 27.45, cartsDaily: 0.22, purchasesDaily: 0.0, trendClicks: 0.335, trendPurchases: 0.0, trendCarts: 0.0, ctrBrand: 0.030466 },
  { id: "800000815144", position: 42, lpoScore: 160.722, clicks: 3064, carts: 337, purchases: 34, ctr: 0.02791, convRate: 0.000328, clicksDaily: 98.84, cartsDaily: 10.87, purchasesDaily: 1.10, trendClicks: 3.017, trendPurchases: 0.00637, trendCarts: 0.05403, ctrBrand: 0.031606 },
  { id: "800000949952", position: 43, lpoScore: 160.048, clicks: 3121, carts: 128, purchases: 4, ctr: 0.04072, convRate: 0.0000525, clicksDaily: 100.68, cartsDaily: 4.13, purchasesDaily: 0.13, trendClicks: -0.332, trendPurchases: -0.05328, trendCarts: -0.08952, ctrBrand: 0.033863 },
  { id: "2424007901", position: 44, lpoScore: 159.460, clicks: 451, carts: 45, purchases: 5, ctr: 0.06181, convRate: 0.000688, clicksDaily: 15.03, cartsDaily: 1.67, purchasesDaily: 0.22, trendClicks: 0.369, trendPurchases: 0.0, trendCarts: 0.02441, ctrBrand: 0.031764 },
  { id: "856000202", position: 45, lpoScore: 159.286, clicks: 1339, carts: 109, purchases: 5, ctr: 0.04620, convRate: 0.000208, clicksDaily: 43.19, cartsDaily: 3.52, purchasesDaily: 0.25, trendClicks: 0.863, trendPurchases: 0.0, trendCarts: 0.1270, ctrBrand: 0.031731 },
  { id: "239010401", position: 46, lpoScore: 158.261, clicks: 337, carts: 478, purchases: 69, ctr: 0.04604, convRate: 0.009692, clicksDaily: 10.87, cartsDaily: 15.42, purchasesDaily: 2.20, trendClicks: 0.04355, trendPurchases: -0.01887, trendCarts: 0.09597, ctrBrand: 0.026759 },
  { id: "2798013602", position: 47, lpoScore: 157.127, clicks: 550, carts: 139, purchases: 47, ctr: 0.05165, convRate: 0.003756, clicksDaily: 17.74, cartsDaily: 4.48, purchasesDaily: 1.32, trendClicks: 0.292, trendPurchases: 0.00240, trendCarts: -0.06368, ctrBrand: 0.032278 },
  { id: "2300021902", position: 48, lpoScore: 157.114, clicks: 1350, carts: 50, purchases: 5, ctr: 0.03782, convRate: 0.000141, clicksDaily: 43.55, cartsDaily: 1.72, purchasesDaily: 0.19, trendClicks: 2.066, trendPurchases: 0.0, trendCarts: 0.04072, ctrBrand: 0.029303 },
  { id: "800000976695", position: 49, lpoScore: 157.006, clicks: 1041, carts: 154, purchases: 11, ctr: 0.04486, convRate: 0.000475, clicksDaily: 33.58, cartsDaily: 4.97, purchasesDaily: 0.55, trendClicks: 0.499, trendPurchases: -0.00847, trendCarts: 0.09326, ctrBrand: 0.020364 },
  { id: "2781007001", position: 50, lpoScore: 156.608, clicks: 670, carts: 301, purchases: 31, ctr: 0.03435, convRate: 0.001743, clicksDaily: 21.61, cartsDaily: 9.71, purchasesDaily: 0.97, trendClicks: 0.730, trendPurchases: 0.06708, trendCarts: 0.9847, ctrBrand: 0.031779 },
  { id: "2798028402", position: 51, lpoScore: 156.357, clicks: 1220, carts: 357, purchases: 36, ctr: 0.03615, convRate: 0.001067, clicksDaily: 39.35, cartsDaily: 11.52, purchasesDaily: 1.17, trendClicks: 0.443, trendPurchases: -0.01452, trendCarts: 0.00121, ctrBrand: 0.030493 },
  { id: "2427026501", position: 52, lpoScore: 155.251, clicks: 4347, carts: 156, purchases: 10, ctr: 0.03194, convRate: 0.0000736, clicksDaily: 140.23, cartsDaily: 5.03, purchasesDaily: 0.32, trendClicks: 4.176, trendPurchases: 0.0, trendCarts: 0.01290, ctrBrand: 0.029474 },
  { id: "800000892528", position: 53, lpoScore: 154.136, clicks: 835, carts: 947, purchases: 180, ctr: 0.03816, convRate: 0.008452, clicksDaily: 26.94, cartsDaily: 30.55, purchasesDaily: 5.68, trendClicks: 0.243, trendPurchases: 0.03185, trendCarts: -0.1601, ctrBrand: 0.036044 },
  { id: "812007713", position: 54, lpoScore: 154.005, clicks: 1770, carts: 36, purchases: 3, ctr: 0.04835, convRate: 0.0000825, clicksDaily: 57.10, cartsDaily: 1.24, purchasesDaily: 0.11, trendClicks: 0.899, trendPurchases: 0.0, trendCarts: 0.03480, ctrBrand: 0.031704 },
  { id: "800000767896", position: 55, lpoScore: 153.710, clicks: 280, carts: 12, purchases: 1, ctr: 0.46554, convRate: 0.001683, clicksDaily: 9.03, cartsDaily: 0.40, purchasesDaily: 0.14, trendClicks: 0.278, trendPurchases: 0.0, trendCarts: -0.000518, ctrBrand: 0.044278 },
  { id: "788000603", position: 56, lpoScore: 152.473, clicks: 762, carts: 412, purchases: 101, ctr: 0.04072, convRate: 0.005128, clicksDaily: 24.58, cartsDaily: 13.29, purchasesDaily: 3.0, trendClicks: -0.142, trendPurchases: -0.00190, trendCarts: -0.08952, ctrBrand: 0.029507 },
  { id: "800001011644", position: 57, lpoScore: 149.246, clicks: 613, carts: 344, purchases: 19, ctr: 0.04276, convRate: 0.001326, clicksDaily: 19.77, cartsDaily: 11.10, purchasesDaily: 0.66, trendClicks: 0.197, trendPurchases: 0.00779, trendCarts: -0.03024, ctrBrand: 0.040036 },
  { id: "657049704", position: 58, lpoScore: 149.215, clicks: 402, carts: 158, purchases: 18, ctr: 0.05421, convRate: 0.002158, clicksDaily: 12.97, cartsDaily: 5.10, purchasesDaily: 0.52, trendClicks: 0.206, trendPurchases: 0.00648, trendCarts: 0.07782, ctrBrand: 0.031802 },
  { id: "800000799647", position: 59, lpoScore: 148.887, clicks: 1075, carts: 215, purchases: 20, ctr: 0.04208, convRate: 0.000823, clicksDaily: 34.68, cartsDaily: 6.94, purchasesDaily: 0.83, trendClicks: 0.440, trendPurchases: -0.00611, trendCarts: -0.1133, ctrBrand: 0.039958 },
  { id: "2310001643", position: 60, lpoScore: 148.629, clicks: 1418, carts: 81, purchases: 2, ctr: 0.03946, convRate: 0.0000562, clicksDaily: 45.74, cartsDaily: 2.61, purchasesDaily: 0.11, trendClicks: 1.679, trendPurchases: 0.0, trendCarts: 0.08331, ctrBrand: 0.031749 }
];

// =====================================================
// Theme Definitions
// =====================================================

const THEMES = {
  popularity: {
    name: "Historical Demand",
    shortName: "Popularity",
    color: "#3b82f6",
    colorLight: "#dbeafe",
    icon: "shopping-bag",
    description: "How much shoppers have interacted with this product historically - total clicks, cart adds, and purchases, both cumulative and daily averages.",
    driver: "Primary Driver",
    features: [
      { key: "clicks", label: "Total Clicks" },
      { key: "carts", label: "Total Cart Adds" },
      { key: "purchases", label: "Total Purchases" },
      { key: "clicksDaily", label: "Daily Clicks" },
      { key: "cartsDaily", label: "Daily Cart Adds" },
      { key: "purchasesDaily", label: "Daily Purchases" }
    ]
  },
  engagement: {
    name: "Conversion Efficiency",
    shortName: "Engagement",
    color: "#10b981",
    colorLight: "#d1fae5",
    icon: "target",
    description: "How efficiently this product converts impressions to actions - click-through rates, conversion rates, and brand-level CTR.",
    driver: "Supporting Factor",
    features: [
      { key: "ctr", label: "Click-Through Rate" },
      { key: "convRate", label: "Conversion Rate" },
      { key: "ctrBrand", label: "Brand CTR" }
    ]
  },
  momentum: {
    name: "Trending Direction",
    shortName: "Momentum",
    color: "#f59e0b",
    colorLight: "#fef3c7",
    icon: "trending-up",
    description: "Whether demand for this product is growing or declining recently - trends in clicks, purchases, and cart adds.",
    driver: "Nuanced Role",
    features: [
      { key: "trendClicks", label: "Click Trend" },
      { key: "trendPurchases", label: "Purchase Trend" },
      { key: "trendCarts", label: "Cart Add Trend" }
    ]
  }
};

// Feature display config (all 13 features with friendly names and formatting)
const FEATURE_CONFIG = {
  clicks: { label: "Total Clicks", format: v => Math.round(v).toLocaleString(), theme: "popularity" },
  carts: { label: "Total Cart Adds", format: v => Math.round(v).toLocaleString(), theme: "popularity" },
  purchases: { label: "Total Purchases", format: v => Math.round(v).toLocaleString(), theme: "popularity" },
  clicksDaily: { label: "Daily Clicks", format: v => v.toFixed(1), theme: "popularity" },
  cartsDaily: { label: "Daily Cart Adds", format: v => v.toFixed(1), theme: "popularity" },
  purchasesDaily: { label: "Daily Purchases", format: v => v.toFixed(1), theme: "popularity" },
  ctr: { label: "Click-Through Rate", format: v => (v * 100).toFixed(2) + "%", theme: "engagement" },
  convRate: { label: "Conversion Rate", format: v => (v * 100).toFixed(3) + "%", theme: "engagement" },
  ctrBrand: { label: "Brand CTR", format: v => (v * 100).toFixed(2) + "%", theme: "engagement" },
  trendClicks: { label: "Click Trend", format: v => (v >= 0 ? "+" : "") + v.toFixed(2), theme: "momentum" },
  trendPurchases: { label: "Purchase Trend", format: v => (v >= 0 ? "+" : "") + v.toFixed(3), theme: "momentum" },
  trendCarts: { label: "Cart Add Trend", format: v => (v >= 0 ? "+" : "") + v.toFixed(3), theme: "momentum" }
};

// =====================================================
// Percentile Ranking & Theme Score Computation
// =====================================================

function computePercentileRanks(products, featureKey) {
  const indexed = products.map((p, i) => ({ index: i, value: p[featureKey] }));
  indexed.sort((a, b) => a.value - b.value);
  const ranks = new Array(products.length);
  const n = products.length;
  for (let r = 0; r < n; r++) {
    ranks[indexed[r].index] = r / (n - 1);
  }
  return ranks;
}

function computeThemeScores(products) {
  const themeScores = {};
  for (const [themeKey, theme] of Object.entries(THEMES)) {
    const featureKeys = theme.features.map(f => f.key);
    const allRanks = featureKeys.map(k => computePercentileRanks(products, k));
    themeScores[themeKey] = products.map((_, i) => {
      const sum = allRanks.reduce((acc, ranks) => acc + ranks[i], 0);
      return sum / featureKeys.length;
    });
  }
  return themeScores;
}

function computeFeaturePercentiles(products) {
  const percentiles = {};
  const allKeys = Object.keys(FEATURE_CONFIG);
  for (const key of allKeys) {
    percentiles[key] = computePercentileRanks(products, key);
  }
  return percentiles;
}

// =====================================================
// Product Classification
// =====================================================

const CLASSIFICATIONS = {
  bestSeller: { label: "Best Seller", color: "#2563eb", bgColor: "#dbeafe" },
  hotSeller: { label: "Hot Seller", color: "#dc2626", bgColor: "#fee2e2" },
  volumeLeader: { label: "Volume Leader", color: "#7c3aed", bgColor: "#ede9fe" },
  risingStar: { label: "Rising Star", color: "#f59e0b", bgColor: "#fef3c7" },
  hiddenGem: { label: "Hidden Gem", color: "#10b981", bgColor: "#d1fae5" },
  solidPerformer: { label: "Solid Performer", color: "#6b7280", bgColor: "#f3f4f6" }
};

function classifyProduct(pop, eng, mom) {
  if (pop >= 0.6 && eng >= 0.5) return "bestSeller";
  if (pop >= 0.6 && mom >= 0.5) return "hotSeller";
  if (pop >= 0.5) return "volumeLeader";
  if (mom >= 0.6 && pop < 0.4) return "risingStar";
  if (eng >= 0.6 && pop < 0.4) return "hiddenGem";
  return "solidPerformer";
}

// =====================================================
// Natural Language Narrative Generator
// =====================================================

function generateProductNarrative(product, pop, eng, mom, classification) {
  const parts = [];
  const cls = CLASSIFICATIONS[classification];

  parts.push(`<strong>Product ${product.id}</strong> is ranked <strong>#${product.position}</strong> out of 60 with an LPO score of <strong>${product.lpoScore.toFixed(1)}</strong>.`);
  parts.push(`It is classified as a <span style="color:${cls.color};font-weight:600">${cls.label}</span>.`);

  // Popularity analysis
  const popPct = Math.round(pop * 100);
  if (pop >= 0.7) {
    parts.push(`It has <strong>strong historical demand</strong> (top ${100 - popPct}% in popularity), which is the biggest factor in its high ranking.`);
  } else if (pop >= 0.4) {
    parts.push(`It has <strong>moderate historical demand</strong> (${popPct}th percentile in popularity).`);
  } else {
    parts.push(`It has <strong>limited historical demand</strong> (${popPct}th percentile in popularity), which limits its ranking potential.`);
  }

  // Engagement analysis
  const engPct = Math.round(eng * 100);
  if (eng >= 0.7) {
    parts.push(`Shoppers who do see it <strong>convert well</strong> &mdash; it's in the top ${100 - engPct}% for engagement quality.`);
  } else if (eng >= 0.4) {
    parts.push(`Its engagement metrics are <strong>around average</strong> (${engPct}th percentile).`);
  } else {
    parts.push(`Its <strong>conversion metrics are below average</strong> (${engPct}th percentile), meaning shoppers aren't engaging as strongly.`);
  }

  // Momentum analysis
  const momPct = Math.round(mom * 100);
  if (mom >= 0.7) {
    parts.push(`It's <strong>trending upward</strong> recently (top ${100 - momPct}% momentum) &mdash; this signals growing demand.`);
  } else if (mom >= 0.4) {
    parts.push(`Its recent trend is <strong>stable</strong> (${momPct}th percentile momentum).`);
  } else {
    parts.push(`Its recent trend is <strong>flat or declining</strong> (${momPct}th percentile momentum).`);
  }

  // Actionable insights
  if (pop < 0.4 && eng >= 0.6) {
    parts.push(`<em>Opportunity: This product converts well but lacks traffic. Increasing its visibility could improve both its ranking and sales.</em>`);
  } else if (pop >= 0.6 && eng < 0.3) {
    parts.push(`<em>Watch: High traffic but poor conversion. Consider reviewing the product page content or pricing.</em>`);
  } else if (mom >= 0.6 && pop < 0.4) {
    parts.push(`<em>Rising star: Growing demand may push this product higher over time if the trend continues.</em>`);
  } else if (pop >= 0.7 && mom < 0.3) {
    parts.push(`<em>Note: Strong historical demand but declining trends. Monitor whether this product is losing momentum.</em>`);
  }

  return parts.join(" ");
}

// =====================================================
// Tier Definitions
// =====================================================

const TIERS = [
  { name: "Page Leaders", range: [1, 12], color: "#3b82f6", bgColor: "#eff6ff", description: "These products dominate the page. They earned their position primarily through high historical demand \u2014 the model rewards products that have proven they attract shoppers." },
  { name: "Solid Performers", range: [13, 40], color: "#6b7280", bgColor: "#f9fafb", description: "A competitive pack where scores differ by just a few points. Small improvements in any area could shift positions significantly." },
  { name: "Opportunity Zone", range: [41, 60], color: "#f59e0b", bgColor: "#fffbeb", description: "These products are clustered tightly at the bottom. Many have niche strengths (high conversion or trending up) that could help them climb." }
];

function getTier(position) {
  return TIERS.find(t => position >= t.range[0] && position <= t.range[1]);
}

// =====================================================
// Compute all derived data at load time
// =====================================================

const themeScores = computeThemeScores(PRODUCTS);
const featurePercentiles = computeFeaturePercentiles(PRODUCTS);

// Attach computed scores to each product
PRODUCTS.forEach((p, i) => {
  p.popularity = themeScores.popularity[i];
  p.engagement = themeScores.engagement[i];
  p.momentum = themeScores.momentum[i];
  p.classification = classifyProduct(p.popularity, p.engagement, p.momentum);
  p.tier = getTier(p.position);
  p.dominantTheme = p.popularity >= p.engagement && p.popularity >= p.momentum ? "popularity"
    : p.engagement >= p.momentum ? "engagement" : "momentum";
});

// Page-level averages
const pageAvg = {
  popularity: PRODUCTS.reduce((s, p) => s + p.popularity, 0) / PRODUCTS.length,
  engagement: PRODUCTS.reduce((s, p) => s + p.engagement, 0) / PRODUCTS.length,
  momentum: PRODUCTS.reduce((s, p) => s + p.momentum, 0) / PRODUCTS.length
};

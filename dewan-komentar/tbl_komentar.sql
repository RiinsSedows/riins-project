/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100037
 Source Host           : localhost:3306
 Source Schema         : db_dewankomputer

 Target Server Type    : MySQL
 Target Server Version : 100037
 File Encoding         : 65001

 Date: 22/03/2019 19:03:51
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tbl_komentar
-- ----------------------------
DROP TABLE IF EXISTS `tbl_komentar`;
CREATE TABLE `tbl_komentar`  (
  `komentar_id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_komentar_id` int(11) NOT NULL,
  `komentar` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `nama_pengirim` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`komentar_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tbl_komentar
-- ----------------------------
INSERT INTO `tbl_komentar` VALUES (1, 0, 'tes komentar 1', 'Dewan', '2019-03-22 18:57:03');
INSERT INTO `tbl_komentar` VALUES (2, 1, 'balasan komentar 1', 'Komputer', '2019-03-22 18:57:13');
INSERT INTO `tbl_komentar` VALUES (3, 2, 'balasan anak komentar 1', 'Dini', '2019-03-22 18:57:34');
INSERT INTO `tbl_komentar` VALUES (4, 1, 'Balasan Komentar 2', 'Dono', '2019-03-22 18:57:49');

SET FOREIGN_KEY_CHECKS = 1;

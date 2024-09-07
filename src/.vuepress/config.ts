/*
 * @Descripttion: BOP
 * @version: 1.0
 * @Author: Taoeaten
 * @Date: 2024-09-07 09:50:51
 * @LastEditors: Taoeaten
 * @LastEditTime: 2024-09-07 16:41:10
 */
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/myVuePress/",

  lang: "zh-CN",
  title: "Tamm·Edes·Marni",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

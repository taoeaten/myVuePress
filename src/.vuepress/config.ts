/*
 * @Descripttion: BOP
 * @version: 1.0
 * @Author: Taoeaten
 * @Date: 2024-09-07 09:50:51
 * @LastEditors: Taoeaten
 * @LastEditTime: 2024-09-07 11:01:54
 */
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/myVuePress/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

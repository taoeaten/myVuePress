/*
 * @Descripttion: BOP
 * @version: 1.0
 * @Author: Taoeaten
 * @Date: 2024-09-07 09:50:51
 * @LastEditors: Taoeaten
 * @LastEditTime: 2024-09-07 17:29:58
 */
import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  //"/demo/",
  // {
  //   text: "Blog",
  //   icon: "pen-to-square",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "苹果",
  //       icon: "pen-to-square",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "pen-to-square", link: "1" },
  //         { text: "苹果2", icon: "pen-to-square", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "香蕉",
  //       icon: "pen-to-square",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "香蕉 1",
  //           icon: "pen-to-square",
  //           link: "1",
  //         },
  //         {
  //           text: "香蕉 2",
  //           icon: "pen-to-square",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "樱桃", icon: "pen-to-square", link: "cherry" },
  //     { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },
  {
    text: "Tamm",
    icon: "pen-to-square",
    prefix: "/Tamm/",
    children: [
      { text: "番茄", icon: "pen-to-square", link: "tomato" },
    ],
  },
  {
    text: "Edes",
    icon: "pen-to-square",
    prefix: "/Edes/",
    children: [
      { text: "草莓", icon: "pen-to-square", link: "strawberry" },
    ],
  },
  {
    text: "Marni",
    icon: "pen-to-square", 
    prefix: "/Marni/",
    children: [
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
    ],
  },
  {
    text: "关于我",
    icon: "info-circle",
    link: "/intro",
  },
]);

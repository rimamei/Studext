import React, { useState } from "react";
import { NavSearch, NavItem, NavMenu } from "../atoms";
import NavBrand from "../atoms/NavBrand";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`lg:mx-6 py-4 lg:flex items-center ${
        isOpen ? "flex-col" : "flex"
      }`}
    >
      <div className="w-full flex lg:flex-1 items-center">
        <NavBrand />
        <NavSearch outerClassName="mx-4 w-full" />
        <NavMenu
          onClick={() => setIsOpen(!isOpen)}
          outerClassName="lg:hidden block"
        />
      </div>
      <div
        className={`lg:relative flex-col items-center lg:relative lg:flex-2 lg:flex lg:flex-row ${
          isOpen ? "flex h-screen w-screen mt-5" : "hidden"
        }`}
      >
        <NavItem title="Home">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.71368 0.499524C9.3217 0.100155 8.6783 0.100154 8.28633 0.499524L4.04392 4.82192C3.42301 5.45453 3.87119 6.52239 4.7576 6.52239H5.4V15.7724C5.4 16.877 6.29544 17.7724 7.40001 17.7724H10.6C11.7046 17.7724 12.6 16.877 12.6 15.7724V6.52239H13.2424C14.1288 6.52239 14.577 5.45453 13.9561 4.82192L9.71368 0.499524ZM8.99471 6.52239H9.00531C9.99698 6.52525 10.8 7.33004 10.8 8.32238C10.8 9.3165 9.99412 10.1224 9.00001 10.1224C8.0059 10.1224 7.20001 9.3165 7.20001 8.32238C7.20001 7.33004 8.00303 6.52525 8.99471 6.52239Z" />
            <path d="M1.8 8.32238C0.805888 8.32238 0 9.12827 0 10.1224V15.9724C0 16.9665 0.805888 17.7724 1.8 17.7724C2.79411 17.7724 3.6 16.9665 3.6 15.9724V10.1224C3.6 9.12827 2.79411 8.32238 1.8 8.32238Z" />
            <path d="M16.2 8.32238C15.2059 8.32238 14.4 9.12827 14.4 10.1224V15.9724C14.4 16.9665 15.2059 17.7724 16.2 17.7724C17.1941 17.7724 18 16.9665 18 15.9724V10.1224C18 9.12827 17.1941 8.32238 16.2 8.32238Z" />
          </svg>
        </NavItem>
        <NavItem title="My Course">
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V17C16 17.2652 15.8946 17.5196 15.7071 17.7071C15.5196 17.8946 15.2652 18 15 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.316071 16.5587 0 15.7956 0 15V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0ZM2.29289 15.7071C2.48043 15.8946 2.73478 16 3 16H14V14H3C2.73478 14 2.48043 14.1054 2.29289 14.2929C2.10536 14.4804 2 14.7348 2 15C2 15.2652 2.10536 15.5196 2.29289 15.7071ZM8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11ZM6.44444 7C6.19893 7 6 6.79921 6 6.5514V5.67082C6 5.42302 6.19893 5.22222 6.44444 5.22222C6.68996 5.22222 6.88889 5.42302 6.88889 5.67082V6.5514C6.88889 6.79915 6.69001 7 6.44444 7ZM9.55556 7C9.31004 7 9.11111 6.79921 9.11111 6.5514V5.67082C9.11111 5.42302 9.31004 5.22222 9.55556 5.22222C9.80107 5.22222 10 5.42302 10 5.67082V6.5514C10 6.79915 9.80101 7 9.55556 7ZM7.99998 8.77778C7.67965 8.77778 7.37503 8.61075 7.16425 8.31954C7.0859 8.21132 7.09528 8.04714 7.18517 7.95285C7.27509 7.85856 7.41139 7.86982 7.48976 7.97804C7.61854 8.15598 7.80451 8.25799 8.00001 8.25799C8.19551 8.25799 8.38148 8.15598 8.51026 7.97804C8.58855 7.86986 8.72493 7.85856 8.81485 7.95285C8.90471 8.04714 8.91409 8.21132 8.83577 8.31954C8.62493 8.61072 8.32032 8.77778 7.99998 8.77778Z"
            />
          </svg>
        </NavItem>
        <NavItem title="Dashboard">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 0C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H14C16.2091 18 18 16.2091 18 14V4C18 1.79086 16.2091 0 14 0H4ZM9 3C8.17157 3 7.5 3.67157 7.5 4.5V13.5C7.5 14.3284 8.17157 15 9 15C9.82843 15 10.5 14.3284 10.5 13.5V4.5C10.5 3.67157 9.82843 3 9 3ZM4 9C3.17157 9 2.5 9.67157 2.5 10.5V13.5C2.5 14.3284 3.17157 15 4 15C4.82843 15 5.5 14.3284 5.5 13.5V10.5C5.5 9.67157 4.82843 9 4 9ZM12.5 8.5C12.5 7.67157 13.1716 7 14 7C14.8284 7 15.5 7.67157 15.5 8.5V13.5C15.5 14.3284 14.8284 15 14 15C13.1716 15 12.5 14.3284 12.5 13.5V8.5Z"
              fill="#008FFF"
            />
          </svg>
        </NavItem>
        <NavItem title="Chat">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 9C18 10.6781 17.5407 12.2489 16.741 13.5936L17.5342 16.3696C17.7434 17.1019 17.0899 17.79 16.3478 17.6187L13.2908 16.9133C12.0154 17.6063 10.5537 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM5 10.5C5.82843 10.5 6.5 9.82843 6.5 9C6.5 8.17157 5.82843 7.5 5 7.5C4.17157 7.5 3.5 8.17157 3.5 9C3.5 9.82843 4.17157 10.5 5 10.5ZM9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5ZM14.5 9C14.5 9.82843 13.8284 10.5 13 10.5C12.1716 10.5 11.5 9.82843 11.5 9C11.5 8.17157 12.1716 7.5 13 7.5C13.8284 7.5 14.5 8.17157 14.5 9Z"
            />
          </svg>
        </NavItem>
        <NavItem title="Notification">
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.99999 20C9.09999 20 9.99999 19.1 9.99999 18H5.99999C5.99999 18.5304 6.2107 19.0391 6.58578 19.4142C6.96085 19.7893 7.46956 20 7.99999 20ZM14 14V9C14 5.93 12.36 3.36 9.49999 2.68V2C9.49999 1.17 8.82999 0.5 7.99999 0.5C7.16999 0.5 6.49999 1.17 6.49999 2V2.68C3.62999 3.36 1.99999 5.92 1.99999 9V14L0.70999 15.29C0.0799904 15.92 0.51999 17 1.40999 17H14.58C15.47 17 15.92 15.92 15.29 15.29L14 14Z" />
          </svg>
        </NavItem>
        <NavItem title="Profile">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM4.5 7.99065C4.5 8.54821 4.9476 9 5.5 9C6.05253 9 6.5 8.54808 6.5 7.99065V6.00935C6.5 5.45179 6.0524 5 5.5 5C4.9476 5 4.5 5.45179 4.5 6.00935V7.99065ZM11.5 7.99065C11.5 8.54821 11.9476 9 12.5 9C13.0523 9 13.5 8.54808 13.5 7.99065V6.00935C13.5 5.45179 13.0524 5 12.5 5C11.9476 5 11.5 5.45179 11.5 6.00935V7.99065ZM7.11956 11.969C7.59382 12.6242 8.27921 13 8.99996 13C9.72071 13 10.4061 12.6241 10.8805 11.969C11.0567 11.7255 11.0356 11.3561 10.8334 11.1439C10.6311 10.9318 10.3242 10.9572 10.1481 11.2006C9.85833 11.601 9.4399 11.8305 9.00002 11.8305C8.56015 11.8305 8.14172 11.601 7.85197 11.2006C7.67562 10.9571 7.36896 10.9318 7.16664 11.1439C6.96439 11.3561 6.94328 11.7255 7.11956 11.969Z"
            />
          </svg>
        </NavItem>
      </div>
    </nav>
  );
};

export default Navbar;

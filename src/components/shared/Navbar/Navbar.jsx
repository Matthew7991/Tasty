import React from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/home">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="Home">
            <path
              id="Home_2"
              d="M8.15722 19.7714L8.13797 17.5618C8.13796 16.7818 8.77388 16.148 9.56177 16.1428H12.4478C13.2395 16.1428 13.8813 16.7781 13.8813 17.5618L13.9005 19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Stroke_3"
              d="M8.0905 12.8896H13.9097"
              stroke="#C6E3E5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </NavLink>
      <NavLink to="/areas">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="Search">
            <circle
              id="Ellipse_739"
              cx="9.76659"
              cy="9.76639"
              r="8.98856"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Line_181"
              d="M16.0183 16.4849L19.5423 19.9997"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </NavLink>
      <NavLink to="/">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="Heart">
            <path
              id="Stroke 1"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.37187 9.59832C0.298865 6.24832 1.55287 2.41932 5.06987 1.28632C6.91987 0.689322 8.96187 1.04132 10.4999 2.19832C11.9549 1.07332 14.0719 0.693322 15.9199 1.28632C19.4369 2.41932 20.6989 6.24832 19.6269 9.59832C17.9569 14.9083 10.4999 18.9983 10.4999 18.9983C10.4999 18.9983 3.09787 14.9703 1.37187 9.59832Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Stroke 3"
              d="M14.5 4.7002C15.57 5.0462 16.326 6.0012 16.417 7.1222"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </NavLink>
      <NavLink to="/">
        <svg
          width="17"
          height="20"
          viewBox="0 0 17 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="Profile">
            <path
              id="Stroke 1"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.84792 13.3462C4.9803 13.3462 1.67744 13.931 1.67744 16.2729C1.67744 18.6148 4.95935 19.2205 8.84792 19.2205C12.7155 19.2205 16.0174 18.6348 16.0174 16.2938C16.0174 13.9529 12.7365 13.3462 8.84792 13.3462Z"
              stroke="#97A2B0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Stroke 3"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.84793 10.0059C11.386 10.0059 13.4432 7.94779 13.4432 5.40969C13.4432 2.8716 11.386 0.814453 8.84793 0.814453C6.30983 0.814453 4.25174 2.8716 4.25174 5.40969C4.24316 7.93922 6.28697 9.99731 8.81555 10.0059H8.84793Z"
              strokeWidth="1.42857"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </NavLink>
    </div>
  )
}

export default Navbar

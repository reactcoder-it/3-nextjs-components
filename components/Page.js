const Page = ({ children }) => {
  return (
    <div className="app">
      {children}
      <style jsx global>{`
        *, *:before, *:after {
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          background-color: #001970;
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
      <style jsx>{`
        .app {
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export default Page
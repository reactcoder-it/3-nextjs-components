const Container = ({ children }) => {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          max-width: 800px;
          width: 100%;
          margin: 0 auto;
          padding-left: 15px;
          padding-right: 15px;
        }
      `}</style>
    </div>
  )
}

export default Container
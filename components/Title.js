const Title = ({ children }) => {
  return (
    <h1>
      {children}
      <style jsx>{`
        h1 {
          text-align: center;
        }
      `}</style>
    </h1>
  )
}

export default Title
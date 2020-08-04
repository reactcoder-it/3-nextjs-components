const Info = ({ children }) => {
  return (
    <div className="info">
      {children}
      <style jsx>{`
        .info {
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default Info
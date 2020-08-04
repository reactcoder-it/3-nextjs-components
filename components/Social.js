const Social = ({ items }) => {
  return items && items.length > 0 && (
    <ul>
      {items.map(item => (
        <li key={item.id}><a href={item.href}>{item.text}</a></li>
      ))}

      <style jsx>{`
        ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
          padding-top: 3rem;
        }
        li {
          margin: 5px;
          width: 40px;
          height: 40px;
          display: flex;
          background-color: rgba(255,255,255, .3);
          border: 1px solid #fff;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          cursor: pointer;
        }
        li:hover {
          background-color: rgba(255,255,255, .6);
        }
        a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </ul>
  )
}

export default Social
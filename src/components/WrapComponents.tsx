const WrapComponents: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="px-[10%]">
      {children}
    </div>
  )
}

export default WrapComponents
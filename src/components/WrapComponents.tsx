const WrapComponents: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="lg:max-w-[80%] max-w-[95%] mx-auto">
      {children}
    </div>
  )
}

export default WrapComponents
const ErrorExample = () => {
  let count = 0

  const handleClick = () => {
    count = count + 1
    console.log(count)
  }

  return (
    <>
      <h2>{`count: ${count}`}</h2>
      <button className='btn' type='button' onClick={handleClick}>
        Add count
      </button>
    </>
  )
}

export default ErrorExample

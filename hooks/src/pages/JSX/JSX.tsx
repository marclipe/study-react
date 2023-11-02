export const Sum = () =>   {
  const number = -10;

  return (
    <div>
      {number > 0 ? (
        <p>Number {number} is positive</p>
      ): (
        <p>Number {number} is negative</p>
      )}
    </div>
  )
}
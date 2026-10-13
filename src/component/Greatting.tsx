
type GreattingProps = {
  name: string;
  age ?: number;
};
function Greatting({name , age}: GreattingProps) {
return (
  <div>
    <h2>Hello {name}</h2>
    {age !== undefined && <p>Your age is {age}</p>}

  </div>
)
}

export default Greatting
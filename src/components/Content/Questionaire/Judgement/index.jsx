import Button from "../../../Button";


function Judgement({ answer, onSubmit, }) {
  return (
    <>
      {answer || ''}
      <Button onClick={onSubmit} content="Next Question" />
    </>
  );
};


export default Judgement;
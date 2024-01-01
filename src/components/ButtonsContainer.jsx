function ButtonContainer({ onButtonClick }) {
  const ButtonNames = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '=', '/','C']


  return ( 
    <div className="row row-cols-4">
      {ButtonNames.map((item) => 
        <div className="col py-2" key={item}>
          <button className='btn btn-secondary btn-lg' onClick={() => onButtonClick(item)}>{item}</button>
        </div>
      )}
    </div>
   );
}

export default ButtonContainer;
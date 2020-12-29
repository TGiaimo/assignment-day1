import Image from 'next/image';

const Animal = props => {
  return (
    <div>
      <Image height={100} width={100} src={'/${props.img}'}></Image>
      <h2>{props.type}</h2>
      <b>{props.state}</b>
      <h2>{props.adoption_fee}</h2>
    </div>
  )
}
export default Animal

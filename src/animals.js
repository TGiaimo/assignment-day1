import Image from 'next/image';

const Animal = props => {
  return (
    <div class="bg-contain bg-white mx-auto text-center rounded-lg">
      <Image class="rounded-t-lg" height={220} width={320} src={`/${props.img}`} />
      <h1><b>{props.type}</b></h1>
      <h2>{props.state}</h2>
      <h2>${props.adoption_fee}</h2>
    </div>
  )
}
export default Animal

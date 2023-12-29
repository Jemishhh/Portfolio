import { TypeAnimation } from 'react-type-animation';

const TextEff = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Coder',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1500,
        'UI/UX Developer',
        1500,
        'Programmer',
        1500
      ]}
      
      speed={50}
      // wrapper="span"
      
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
      // style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}      
    />
  );
};
export default TextEff
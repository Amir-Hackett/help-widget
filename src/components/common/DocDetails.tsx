export const DocDetails = (props: { src: string | undefined; }) => {
  return <div className='widget-frame'>
    <iframe 
      title={props.src}
      allowFullScreen
      height="100%"
      width="100%"
      src={props.src}
    />   
  </div>
}
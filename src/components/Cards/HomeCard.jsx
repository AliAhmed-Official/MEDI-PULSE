
function HomeCard({ image, heading, description, backColor = '#E4F6F9' }) {
  return (
    <>
      <div className="h-52 w-36 md:w-56 md:h-[300px] rounded-3xl flex flex-col cursor-pointer shadow-full">
        <div className="h-2/3 flex justify-center rounded-t-3xl" style={{ backgroundColor: backColor }}>
          <img src={image} alt="Card Image" className="max-w-full max-h-full mt-2" />
        </div>
        <div className="mx-2 mt-2">
          <h3 className="font-semibold text-[12px] md:text-lg">{heading}</h3>
          <p className="text-[8px] md:text-[14px]">{description}</p>
        </div>
      </div>
    </>
  )
}

export default HomeCard;
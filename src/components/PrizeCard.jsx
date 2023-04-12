const PrizeCard = (params) =>{
    return(
        <div className="flex flex-col justify-center items-center box-bg w-80 py-6">
            <img src={params.img} alt="" />
            <h2 className="clash-bold text-3xl text-yellow-400">{params.title}</h2>
            <h3 className="text-white mori text-2xl">₹ {params.price}</h3>
        </div>
    );
}

export default PrizeCard;
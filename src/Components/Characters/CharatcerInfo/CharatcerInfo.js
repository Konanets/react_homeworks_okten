import './CharatcerInfo.css'


const CharatcerInfo = ({charatcer}) => {
    console.log(charatcer)
    return (
        <div className={'info'}>
            <img src={charatcer.image} alt=""/>

            <div>
                <p>{charatcer.name}-{charatcer.gender}</p>
            </div>

        </div>
    )
}

export default CharatcerInfo
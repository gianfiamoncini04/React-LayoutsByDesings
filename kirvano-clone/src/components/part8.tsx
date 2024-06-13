import { dataSix } from "../ui/data";

export function Part8() {
    return (
        <>
            <section>
                <div>
                    <h1></h1>
                    <p></p>
                </div>
                <div>
                    <div>
                        <span>
                            <h1></h1>
                            <p></p>
                        </span>
                        <span>
                            <strong></strong>
                            <p></p>
                        </span>
                    </div>
                    <div>
                        <span></span>
                        <h1></h1>
                        <p></p>
                        <span></span>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    {dataSix.map(([[img], addInfo, style, title, topics]: string[], index) => (
                        <>
                        <div key={index}>
                            <img src={img} alt={img} className={`${style}`} />
                            {addInfo && <><h2>{addInfo}</h2></>}
                            <h1>{title}</h1>
                            <p>{topics}</p>
                        </div>
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}
import Inner from "./inner";

function Card() {
   
    return (
        <div>
            <Inner title="Title1" desc="desc1 new ine onf dsf " newPrice={1200} oldPrice={1500} />
             <Inner title="Title2" desc="desc2 new ine onf dsf " newPrice={20000} oldPrice={25000} />
              <Inner title="Title3" desc="desc3 new ine onf dsf " newPrice={1000} oldPrice={1500} />
               <Inner title="Title4" desc="desc4 new ine onf dsf " newPrice={1200} oldPrice={1500} />
        </div>
    )
}

export default Card
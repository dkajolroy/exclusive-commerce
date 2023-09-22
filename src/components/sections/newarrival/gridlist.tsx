import { arrival } from "@/constants/dummy";
import ArrivalLabel from "./arrivalLabel";

function GridList() {
  return (
    <div className="flex  gap-5">
      <div>
        <ArrivalLabel descCollapse={true} item={arrival[0]} />
      </div>
      <div className="flex flex-col gap-5">
        {/* Total component Height */}
        <div className="h-72">
          <ArrivalLabel descCollapse={true} item={arrival[1]} />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <ArrivalLabel descCollapse={false} item={arrival[2]} />
          </div>
          <div>
            <ArrivalLabel descCollapse={false} item={arrival[3]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridList;

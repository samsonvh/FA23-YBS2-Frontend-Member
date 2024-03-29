const TourSnapShot = ({
  duration,
  durationUnit,
  maximumGuest,
  startTime,
  endTime,
}: {
  duration: number;
  durationUnit: string;
  maximumGuest: number;
  startTime: Date;
  endTime: Date;
}) => {
  if(!startTime){
    startTime = new Date();
  }
  if(!endTime){
    endTime = new Date();
  }


  return (
    <div className="row y-gap-30 justify-between pt-20">
      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-clock text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Duration:
            <br />
            <span>
              {duration} {durationUnit}
            </span>
            {/* 11h */}
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-customer text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Group size:
            <br />
            {maximumGuest}
            {/* 52 */}
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-route text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Start Time: <br /> {startTime.toString().substring(0,5)}
            {/* Near public
            <br /> transportation */}
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-access-denied text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            End Time: <br /> {endTime.toString().substring(0,5)}
            {/* Free cancellation <br />
            <a href="#" className="text-blue-1 underline">
              Learn more
            </a> */}
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default TourSnapShot;

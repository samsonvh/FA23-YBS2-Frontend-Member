import FilterBox from "@components/tours/filter-box";

const SidebarRight = ({ cruise }) => {
  return (
    <div className="ml-50 lg:ml-0">
      <div className="px-30 py-30 border-light rounded-4 shadow-4">
        <div className="d-flex items-center justify-between">
          <div>
            <span className="text-20 fw-500">US${cruise?.price}</span>
            <span className="text-14 text-light-1 ml-5">nights</span>
          </div>
          <div className="d-flex items-center">
            <div className="text-14 text-right mr-10">
              <div className="lh-15 fw-500">Exceptional</div>
              <div className="lh-15 text-light-1">
                {cruise?.numberOfReviews} reviews
              </div>
            </div>
            <div className="size-40 flex-center bg-blue-1 rounded-4">
              <div className="text-14 fw-600 text-white">{cruise?.ratings}</div>
            </div>
          </div>
        </div>
        {/* End d-flex */}

        <div className="row y-gap-20 pt-30">
          <FilterBox />
        </div>

        <div className="d-flex items-center pt-20">
          <div className="size-40 flex-center bg-light-2 rounded-full">
            <i className="icon-heart text-16 text-green-2" />
          </div>
          <div className="text-14 lh-16 ml-10">
            94% of travelers recommend this experience
          </div>
        </div>
      </div>
      {/* End px-30 FilterBox */}

      <div className="px-30">
        <div className="text-14 text-light-1 mt-30">
          Not sure? You can cancel this reservation up to 24 hours in advance
          for a full refund.
        </div>
      </div>
      {/* End div */}
    </div>
  );
};

export default SidebarRight;

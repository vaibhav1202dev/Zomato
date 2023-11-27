import "./taboption.css";
const tabs = [
  {
    id: 1,
    name: "Delivery",
    active_img: "./imgpage/TabOption/activedelivery.png",
    backdrop: "#FCEEC0",
    inactive_img: "./imgpage/TabOption/delivery.png",
  },
  {
    id: 2,
    name: "Dining Out",
    active_img: "./imgpage/TabOption/activedinigout.png",
    backdrop: "#E5F3F3",
    inactive_img: "./imgpage/TabOption/dinigout.png",
  },
  {
    id: 3,
    name: "Nightlife",
    active_img: "./imgpage/TabOption/activenightlife.png",
    backdrop: "#EDF4FF",
    inactive_img: "./imgpage/TabOption/nightlife.png",
  },
];

const Taboption = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-options">
      <div className="max-width option-wrapper">
        {tabs.map((tab) => {
          return (
            <div
              onClick={() => setActiveTab(tab.name)}
              className={`tab-item absolute-center cur-po ${
                activeTab === tab.name && "active-tab"
              }`}
            >
              <div
                className="tab-image-container absolute-center"
                style={{
                  backgroundColor: `${
                    activeTab === tab.name ? tab.backdrop : ""
                  }`,
                }}
              >
                <img
                  className="tab-image"
                  alt={tab.name}
                  src={
                    activeTab === tab.name ? tab.active_img : tab.inactive_img
                  }
                />
              </div>
              <div className="tab-name">{tab.name}</div>
            </div>
          );
        })}
      </div>
      <div className="divider-line"></div>
    </div>
  );
};


export default Taboption;

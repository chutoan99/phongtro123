import { footer } from "../../utils/constant";
function Footer() {
  return (
    <div className="w-full mt-[30px] bg-white ">
      <div className="max-w-1100 mx-[auto] mb-[50px]">
        <div className="py-[20px]" style={{ borderBottom: "1px solid #ccc" }}>
          <ul className="flex text-[1.1rem] grid-cols-5 justify-between h-[40px] items-center">
            {footer.listsCategory.map((item, index) => (
              <li key={index} className="list-none text-[#1266dd] font-bold">
                {item} <i class="fa-solid fa-angle-down text-[#000]"></i>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ borderBottom: "1px solid #ccc" }} className="py-[20px]">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="w-[220px] h-[70px]">
                  <img
                    src={footer.col1.list}
                    alt="logo"
                    className="w-full h-full"
                  />
                </div>
                <p>{footer.col1.header}</p>
              </div>
              <div className="col-lg-3">
                <div className="w-full h-full grid gap-[10px]">
                  <h1 className="text-[1rem] font-bold">
                    {footer.col2.header}
                  </h1>
                  <ul className="gap-[10px] grid">
                    {footer.col2.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="w-full h-full grid gap-[10px]">
                  <h1 className="text-[1rem] font-bold">
                    {footer.col3.header}
                  </h1>
                  <ul className="gap-[10px] grid">
                    {footer.col3.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="gap-[10px] grid">
                  <h1>{footer.col4.header}</h1>
                  <div className="flex gap-[8px] mt-[10px]">
                    {footer.col4.listContact.map((item, index) => (
                      <div className="w-[35px] h-[35px]" key={index}>
                        <img
                          className="w-full h-full "
                          src={item}
                          alt="logo Contact"
                        />
                      </div>
                    ))}
                  </div>
                  <h1>{footer.col4.pay}</h1>
                  <div className="flex gap-[8px] mt-[10px]">
                    <div className="w-full h-full">
                      <img
                        className="w-full h-full "
                        src={footer.col4.payUrl}
                        alt="logo Contact"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="py-[20px] flex items-center gap-[10px]"
          style={{ borderBottom: "1px solid #ccc" }}
        >
          <span className="text-[#333] text-[1.1rem]">Cùng hệ thống</span>
          <ul className="flex w-[140px] items-center gap-[10px]">
            {footer.listsLgo.map((item, index) => (
              <img
                key={index}
                className="list-none w-full h-full"
                src={item}
                alt="logo"
              />
            ))}
          </ul>
        </div>

        <div className="text-center gap-[13px] grid my-[20px]">
          <p className="text-[1.2rem] font-bold">{footer.subTitle}</p>
          <p className="text-]1.1rem] font-bold">{footer.des1}</p>
          <p>{footer.des2}</p>
          <p>{footer.des3}</p>
          <p>{footer.des4}</p>
          <p>{footer.des5}</p>
        </div>

        <div className="flex gap-[10px] justify-center">
          {footer.certification.map((item, index) => (
            <div className="w-[133px] bg-contain h-[50px]" key={index}>
              <img src={item} className="w-full h-full" alt="logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Footer;

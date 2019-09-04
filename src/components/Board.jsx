import React from 'react';

const Board = () => (
  <main className="theme-contents contents-mt">
    <div className="row flex-column flex-md-row justify-content-md-between align-items-md-center mb-6 no-gutters">
      <div className="order-md-2">
        <ol className="breadcrumb mb-0 p-0 bg-transparent">
          <li className="breadcrumb-item"><a href="#">홈</a></li>
          <li className="breadcrumb-item active" aria-current="page">라이브러리</li>
        </ol>
      </div>
      <div className="order-md-1 mt-3 mt-md-0">
        <div className="h2 font-weight-normal mb-0">주문관리</div>
      </div>
    </div>

    <div className="list d-flex justify-content-xl-between flex-xl-row flex-md-column flex-column mb-3">
      <div className="btn-toolbar mb-xl-0 col-md-12 col-xl-9 p-0">

        <div className="btn-group col-12 col-md-6 col-xl-4 mb-2 p-0" style={{ minWidth: 305, height: 38 }}>
          <div className="d-flex col-12 align-items-center border border-dark rounded-lg p-0 bg-neo">
            <div className="input-group float-left mr-1" style={{ width: '50%' }}>
              <input
                type="text"
                className="form-control start-date pr-0 bg-neo border-0 text-white"
                placeholder="YYYY/MM/DD"
              />
              <span className="ml-1 mr-2">
                <span className="g-transparent bg-neo border-0 d-table h-100">
                  <i
                    className="glyphicons-outline_calendar d-table-cell align-middle"
                    style={{ fontSize: '1.25rem', color: '#aaaaaf' }}
                  />
                </span>
              </span>
            </div>
            <div className="float-left text-center" style={{ width: '2%' }}>
              <div
                className="mx-auto"
                style={{
                  width: '15%',
                  height: 1,
                  backgroundColor: '#c7c7cc',
                  minWidth: 12,
                }}
              />
            </div>
            <div className="input-group float-left" style={{ width: '50%' }}>
              <input
                type="text"
                className="form-control end-date pr-0 bg-neo border-0 text-white"
                placeholder="YYYY/MM/DD"
              />
              <span className="ml-1 mr-2">
                <span className="g-transparent border-0 d-table h-100">
                  <i
                    className="glyphicons-outline_calendar d-table-cell align-middle"
                    style={{ fontSize: '1.25rem', color: '#aaaaaf' }}
                  />
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="btn-group mb-2 col-6 col-sm-6 col-md-1 p-0" style={{ minWidth: 96 }}>
          <button
            className="btn btn-outline-dark btn-md pl-3 pr-3 dropdown-toggle text-left w-100 bg-neo"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            최신순
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">최신 순</a>
            <a className="dropdown-item" href="#">가격 순</a>
            <a className="dropdown-item" href="#">재고 순</a>
          </div>
        </div>

        <div className="btn-group mb-2 col-6 col-sm-6 col-md-1 p-0" style={{ minWidth: 82 }}>
          <button
            className="btn btn-outline-dark btn-md dropdown-toggle text-left w-100 bg-neo"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
                  메뉴
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">메뉴1</a>
            <a className="dropdown-item" href="#">메뉴2</a>
            <a className="dropdown-item" href="#">메뉴3</a>
          </div>
        </div>

        <form className="form-search form-inline mb-2 col-md-6 col-xl-4 p-0">
          <div className="custom-search w-100">
            <input type="search" className="form-control w-100 text-white" aria-describedby="검색" placeholder="검색" />
          </div>
          <button type="button" className="form-search-cancel"><i className="glyphicons-cancel" /></button>
        </form>

      </div>
    </div>
  </main>
);

export default Board;

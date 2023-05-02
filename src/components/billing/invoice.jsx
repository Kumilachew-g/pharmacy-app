import React from "react";
import "../../index.css";

class Invoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productIdsList: this.props.productIds,
      productList: this.props.products,
      billProductList: [],
    };
  }

  render() {
    let total_items = 0;
    for (let i = 0; i < this.state.productList.length; i++) {
      total_items += this.state.productList[i].quantity;
    }
    return (
      <div>
        <div className="container bg-white border rounded-lg border-subtle lg:p-6 p-2">
          <div className="flex flex-row justify-between">
            <div className="w-full flex flex-col">
              <div>
                <h1 className="text-xl font-medium antialiased mb-1 text-left">
                  Total amount
                </h1>
              </div>
              <div>
                <h1 className="text-2xl text-primary font-bold antialiased mb-1 text-left">
                  ₹ {this.props.totalAmount}
                </h1>
              </div>
            </div>
            <div className="w-1/4">
              <div className="flex flex-col ml-auto">
                <div>
                  <h1 className="text-xl font-medium mb-1 text-left">Date</h1>
                </div>
                <div>
                  <h1 className="text-2xl text-primary font-bold  mb-3 text-left">
                    {this.props.date}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <hr className="new2" />
          {/* name*/}
          <div className="mt-4 flex justify-between">
            <div className="text-lg font-medium">Customer Name</div>
            <div className="text-md font-bold">{this.props.name}</div>
          </div>
          <div className="mt-4 flex justify-between">
            <div className="text-lg font-medium">Total number of items</div>
            <div className="text-md font-bold">
              {total_items ? total_items : 0}
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div className="text-lg font-medium">Total amount</div>
            <div className="text-md font-bold">₹ {this.props.totalAmount}</div>
          </div>
          <hr className="new2 mt-4" />
          <div className="flex">
            <h1 className="lg:text-2xl text-xl font-medium mt-4 text-primary">
              Products
            </h1>
          </div>
          <ul>
            <li className="flex flex-row justify-between items-center">
              <div className="flex items-center justify-start w-48">
                <div className="flex-shrink-0 h-12 w-12"></div>
                <div className="text-md font-bold">Name</div>
              </div>
              <div className="w-20 text-md font-bold">Quantity</div>
              <h1 className="w-20 text-md font-bold">Price</h1>
            </li>
            <hr />
            {this.state.productList.map((item) => {
              return (
                <li
                  key={item.sellId}
                  className="flex flex-row justify-between items-center my-2"
                >
                  <div className="flex items-center justify-start w-48">
                    <div className="flex-shrink-0 h-12 w-12">
                      <img
                        className="h-12 w-12 rounded-lg"
                        src={
                          item.picture
                            ? item.picture
                            : "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1130&q=80"
                        }
                        alt="medicine pic"
                      />
                    </div>
                    <div className="flex flex-col text-bold text-lg capitalize ml-2">
                      {item.productName}
                    </div>
                  </div>
                  <div className="flex w-20">{item.quantity}</div>
                  <h1 className="w-20 text-2xl text-black font-medium antialiased  text-left">
                    ₹ {item.cost}
                  </h1>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Invoice;

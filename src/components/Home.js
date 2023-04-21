import React, {Component} from 'react';
import ItemCard from "./ItemCard";
import {productsItems} from "../data/dataProduct";
class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center mt-3"> Nos Produits</h1>
                <section className="py-4 container">
                    <div className="row justify-content-center">
                        {productsItems.map((item, index) => {
                            return <ItemCard
                                key={index}
                                img={item.image}
                                title={item.name}
                                desc={item.desc}
                                price={item.price}
                                item={item}
                            />
                        })}
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
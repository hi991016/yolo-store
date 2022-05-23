import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

// Components
import Grid from "./Grid";
import ProductCard from "./ProductCard";

const InfinityList = (props) => {
  const listRef = useRef(null);
  const perLoad = 6; // items each load

  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  // const [data, setData] = useState(props.data);
  const [data, setData] = useState(props.data.slice(0, perLoad));

  useEffect(() => {
    setData(props.data);
    setIndex(1);
  }, [props.data]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (listRef && listRef.current) {
        if (
          window.scrollY + window.innerHeight >=
          listRef.current.offsetTop + 200
        ) {
          setLoading(true);
        }
      }
    });
  }, [listRef]);

  useEffect(() => {
    const getItems = () => {
      const pages = Math.floor(props.data.length / perLoad);
      const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1;

      if (loading && index <= maxIndex) {
        const start = perLoad * index;
        const end = start + perLoad;

        setData(data.concat(props.data.slice(start, end)));
        setIndex(index + 1);
      }
    };
    getItems();
    setLoading(false);
  }, [loading, index, data, props.data]);

  return (
    <div ref={listRef}>
      <Grid col={3} mdCol={2} smCol={1} gap={20}>
        {data.map((item, index) => (
          <ProductCard
            key={index}
            img01={item.image01}
            img02={item.image02}
            name={item.title}
            price={Number(item.price)}
            slug={item.slug}
          />
        ))}
      </Grid>
    </div>
  );
};

InfinityList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default InfinityList;

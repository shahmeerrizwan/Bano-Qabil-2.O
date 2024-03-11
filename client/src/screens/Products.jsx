import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Checkbox, Radio, Table } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { constants } from '../constants'
import CommentsModal from '../components/CommentsModal'

const createTableColumns = (user) => {

  if (user) {
    const keys = Object.keys(user)
    const columns = keys.map(key => {

      return {
        title: key[0].toUpperCase() + key.slice(1, key.length),
        dataIndex: key,
        key: key,
        ...(key === "id" ? { fixed: 'left' } : {}),
        ...(key === "rating" && {
          render: (rating) => {
            return <pre>{JSON.stringify(rating, undefined, 3)}</pre>
          },
        })
      }
    })

    return columns;
  } return []


}
const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { search } = useLocation();
  const [selectedPostId, setSelectedPostId] = useState("");
  const [categoriesList, setCategoriesList] = useState([]);
  const [categoriesFilters, setCategoriesFilters] = useState("");
  const [category, setCategory] = useState("all");
  // console.log(search);
  const [pagination, setPagination] = useState({ page: 1, perPage: constants.PER_PAGE });
  const { data: categories } = useFetch(`http://localhost:3000/categories`);
  const { isLoading, error, data: { data, items } } = useFetch(`http://localhost:3000/products?_page=${pagination.page}&_per_page=${pagination.perPage}${category === "all" ? "" : `&categoryId=${category}`}${search ? `&userId=${search.split("=")[1]}` : ""}`)
  // console.log({ isLoading, error, data });

  useEffect(() => {
    if (Array.isArray(categories) && categories.length) {
      const optionsCategories = categories && (categories || []).map(({ id, category }) => ({ value: id, label: category[0].toUpperCase() + category.slice(1, category.length) }))
      setCategoriesList(optionsCategories)
    }
  }, [categories])


  const columns = createTableColumns(data && data[0]);
  // console.log(columns);

  const onPageOrPageSizeChange = (page, perPage) => {
    // console.log(page, perPage);
    setPagination({ page, perPage })
  }

  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };

  // console.log(pagination);
  const handleRowClick = (selectedPost) => {
    setSelectedPostId(selectedPost.id);
    setIsModalOpen(true);
  };


  const rowProps = (record) => {
    return {
      onClick: () => handleRowClick(record),
    };
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  console.log(categoriesList);

  // const onChange = (checkedValues) => {
  //   console.log('checked = ', checkedValues);

  //   // setCategoriesFilters()
  // };

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setCategory(e.target.value);
  };

  return (
    <>
      <Radio.Group onChange={onChange} value={category} style={{ margin: "0 0 2rem 2rem" }}>
        {/* <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio> */}
        <Radio value={"all"}>All</Radio>
        {Array.isArray(categories) && categories.map(({ id, category }) => { return <Radio key={id} value={id}>{category[0].toUpperCase() + category.slice(1, category.length)}</Radio> })}
      </Radio.Group>
      {/* <Checkbox.Group options={categoriesList} onChange={onChange} style={{ margin: "0 0 2rem 2rem" }} /> */}
      <Table
        dataSource={data}
        columns={columns}
        pagination={{
          total: items, defaultCurrent: 1, pageSize: pagination.perPage,
          onChange: onPageOrPageSizeChange,
          hideOnSinglePage: true,
          responsive: true,
          showQuickJumper: true,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          itemRender: itemRender,
          showSizeChanger: true,
          position: ['bottomCenter'],
        }}
        loading={isLoading}
        rowKey={(record) => record.id}
        tableLayout='auto'
        bordered
        onRow={rowProps}
      />

      {/* {selectedPostId && isModalOpen && <CommentsModal isModalOpen={isModalOpen} onCloseModal={onCloseModal} postId={selectedPostId}/>} */}
    </>


  )
}

export default Products
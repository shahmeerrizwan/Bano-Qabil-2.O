import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Table } from 'antd'
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
        ...(key === "id" ? { fixed: 'left' } : {})
      }
    })

    return columns;
  } return []


}
const Posts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { search } = useLocation();
  const [selectedPostId, setSelectedPostId] = useState("");
  // console.log(search);
  const [pagination, setPagination] = useState({ page: 1, perPage: constants.PER_PAGE });
  const { isLoading, error, data: { data, items } } = useFetch(`http://localhost:3000/posts?_page=${pagination.page}&_per_page=${pagination.perPage}${search ? `&userId=${search.split("=")[1]}` : ""}`)
  // console.log({ isLoading, error, data });

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

  // console.log(selectedPostId, "selectedPostId");

  const rowProps = (record) => {
    return {
      onClick: () => handleRowClick(record),
    };
  };

  // const onShowModal = () => {
  //   setIsModalOpen(true);
  // };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        pagination={{
          total: items, defaultCurrent: 1, pageSize: pagination.perPage,
          // onChange: (page, pageSize) => { console.log({ page, pageSize }); }
          // onChange: (page, pageSize) => onPageChange(page)
          onChange: onPageOrPageSizeChange,
          hideOnSinglePage: true,
          responsive: true,
          showQuickJumper: true,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          itemRender: itemRender,
          showSizeChanger: true,
          position: ['bottomCenter'],
          // onShowSizeChange: onShowSizeChange
        }}
        loading={isLoading}
        rowKey={(record) => record.id}
        tableLayout='auto'
        bordered
        // onRow={(record, rowIndex) => {

        //   // console.log({ record, rowIndex });
        //   return {
        //     onClick: (event, abc) => { console.log(event); }, // click row
        //     // onDoubleClick: (event) => { }, // double click row
        //     // onContextMenu: (event) => { }, // right button click row
        //     // onMouseEnter: (event) => { }, // mouse enter row
        //     // onMouseLeave: (event) => { }, // mouse leave row
        //   };
        // }}

        onRow={rowProps}
      />

      {selectedPostId && isModalOpen && <CommentsModal isModalOpen={isModalOpen} onCloseModal={onCloseModal} postId={selectedPostId}/>}
    </>


  )
}

export default Posts
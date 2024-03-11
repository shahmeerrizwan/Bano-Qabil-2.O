import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Alert, Table, notification } from 'antd'
import { Link } from 'react-router-dom'
import { constants } from '../constants'

// const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//       sorter: {
//         compare: (a, b) => a.name.localeCompare(b.name),
//         multiple: 1,
//       },
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age',
//       sorter: {
//         compare: (a, b) => a.age - b.age,
//         multiple: 2,
//       },
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//       sorter: {
//         compare: (a, b) => a.address.localeCompare(b.address),
//         multiple: 3,
//       },
//     },
//   ];

const createTableColumns = (user) => {

    if (user) {
        const keys = Object.keys(user)
        const columns = keys.map(key => {

            if (key === "company") {
                return {
                    title: key[0].toUpperCase() + key.slice(1, key.length),
                    dataIndex: key,
                    key: key,
                    render: (company) => {
                        return `${company.name} - ${company.bs}`
                    }
                }
            }
            // else if (key === "address") {
            //     return {
            //         title: key[0].toUpperCase() + key.slice(1, key.length),
            //         dataIndex: key,
            //         key: key,
            //         render: (address) => {
            //             return `${address.street} - ${address.zipcode}`
            //         }
            //     }
            // }
            return {
                title: key[0].toUpperCase() + key.slice(1, key.length),
                dataIndex: key,
                key: key,
                ...(key === "id" ? { fixed: 'left' } : {}),
                ...(key === "name" && {
                    sorter: (a, b) => a.name.length - b.name.length,
                    sortDirections: ['ascend', 'descend'],
                }),
                ...(key === "address" ? {
                    render: (address) => {
                        return `${address.street} - ${address.zipcode}`
                    },
                    // width: "50%"
                } : {}),
                ...(key === "company" ? {
                    render: (company) => `${company.name} - ${company.bs}`
                } : {})

            }
        })
        columns.push({
            title: "Products",
            render: (_, user) => {
                // return <Link to={`/products/${user.id}`}>View Products</Link>
                return <Link to={`/products?userId=${user.id}`}>View Products</Link>
            },
            // https://github.com/ant-design/ant-design/blob/015109b42b85c63146371b4e32b883cf97b088e8/components/_util/responsiveObserve.ts#L1
            responsive: ['xxl']
            // width: "10%",
        }, {
            title: "Posts",
            render: (_, user) => {
                // return <Link to={`/post/${user.id}`}>View Posts</Link>
                return <Link to={`/posts?userId=${user.id}`}>View Posts</Link>
            },
            // width: "10%",
        })

        return columns;
    } return []


}



const Users = () => {
    const [api, contextHolder] = notification.useNotification();
    const [pagination, setPagination] = useState({ page: 1, perPage: constants.PER_PAGE });
    const [sortDirection, setSortDirection] = useState("");
    const { isLoading, error, data: { data, items } } = useFetch(`http://localhost:3000/users?_page=${pagination.page}&_per_page=${pagination.perPage}${sortDirection}`)
    // console.log({ isLoading, error, data, items });

    const columns = createTableColumns(data && data[0]);

    // const onPageOrPageSizeChange = (page, perPage) => {
    //     console.log(page, perPage);
    //     setPagination({ page:page, perPage:perPage })
    // }

    const openNotification = () => {
        api.open({
            type: "error",
            placement: "topRight",
            message: 'Error while getting users',
            description: error,
            // duration: 0,
        });
    };

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

    const onTableChange = (pagination, filters, sorter, extra) => {
        // console.log({ pagination, filters, sorter, extra });
        switch (extra.action) {
            case "paginate":
                setPagination({ page: pagination.current, perPage: pagination.pageSize })
                break;
            case "sort":
                // eslint-disable-next-line no-case-declarations
                let nameQueryParamsForSort = "";
                if (sorter?.order === "ascend") nameQueryParamsForSort = "&_sort=name";
                else if (sorter?.order === "descend") nameQueryParamsForSort = "&_sort=-name";
                else nameQueryParamsForSort = "";

                setSortDirection(nameQueryParamsForSort)
                break;

            default:
                break;
        }
    };

    // console.log(sortDirection);


    // if (error) {
    //     return <Alert message={error} type="error" />
    // }
    return (

        <>
            {contextHolder}

            {error ? openNotification(api) : <Table dataSource={data} columns={columns}
                pagination={{
                    total: items,
                    defaultCurrent: 1,
                    pageSize: pagination.perPage,
                    // onChange: (page, pageSize) => onPageChange(page)
                    // onChange: onPageOrPageSizeChange,
                    hideOnSinglePage: true,
                    responsive: true,
                    showQuickJumper: true,
                    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                    itemRender: itemRender,
                    showSizeChanger: true,
                    // onShowSizeChange: onShowSizeChange
                }}
                loading={isLoading}
                rowKey={(record) => record.id}
                // tableLayout='fixed'
                bordered
                scroll={{ x: 2000, y: 400 }}
                sticky
                onChange={onTableChange}
            />}

        </>

    )
}

export default Users
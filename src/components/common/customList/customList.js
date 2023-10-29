import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table } from 'antd';
import React, { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import UrlContext from "../context/urlContext";
import './customList.css';



const CustomList = (props) => {

    const {
        columns,
        dataSource,
        tableProps,
        editList,
        deleteList,
        handleEditClick,
        expandableRow
    } = props;
    const urls = useContext(UrlContext);
    const navigate = useNavigate();
    const updatedColumns = useMemo(() => columns, [columns]);


    const columnAction = (props) => {
        return (
            <Space size={'large'}>
                {editList &&
                    <EditOutlined
                        className={'action-icons'}
                        onClick={() => handleEditClick(props)}
                    />
                }
                {deleteList &&
                    <DeleteOutlined
                        className={'action-icons'}
                        onClick={() => navigate(urls.home)}
                    />
                }
            </Space>
        )
    }

    if (updatedColumns?.length && updatedColumns?.some(item => item?.key === "action")) {
        const actionColumn = updatedColumns.find(column => column.key === 'action');
        actionColumn.render = columnAction;
    }

    return (
        <React.Fragment>
            <Table
                columns={updatedColumns}
                dataSource={dataSource}
                expandable={expandableRow ?
                    {
                        expandedRowRender: (item) => (
                            <p
                                style={{
                                    margin: 0,
                                }}
                            >
                                detailed View
                            </p>
                        ),
                        rowExpandable: (record) => record.name !== 'Not Expandable',
                    } : ""}
                {...tableProps}
            />
        </React.Fragment>
    )
}

export default CustomList

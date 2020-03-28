import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'

const Table = (props) => {

    // console.log(props)

    const { SearchBar } = Search

    const StyleTitle = {

        display: 'flex',
        padding: '0.4%',
        border: '1px solid #0ccac45e',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.1em',
        fontWeight: 500,
        color: '#0abab5',
        background: '#c7e2e141'
    }

    const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total color" style={{ justifyContent: 'left', float: 'left' }}>
            <span className="bold">{from}</span> / <span className="bold">{to}</span> total de <span className="bold">{size}</span> Resultados...
        </span>
    )
    const rowStyle = {
        padding: '1% !important',
        fontSize: '0.7em',
        verticalAlign: 'top',

    }

    const options = {
        paginationSize: 4,
        pageStartIndex: 1,
        // alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        // firstPageText: 'First',
        prePageText: 'Anterior',
        nextPageText: 'Próxima',
        // lastPageText: 'Last',
        // nextPageTitle: 'First page',
        // prePageTitle: 'Pre page',
        // firstPageTitle: 'Next page',
        // lastPageTitle: 'Last page',
        borderRadius: '5px',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        sizePerPageList: [{
            text: props.numberLines, value: props.numberLines
        }, {
            text: 'All', value: 0
        }]
    }

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        selectColumnPosition: 'right',
        onSelect: (row) => props.selectRadio(row),
        selectionRenderer: (mode) => {
            return <input type="radio" name="radio" value={true} onChange={() => false} checked={mode.checked} />
        }
    }

    return (

        <div >
            <div style={StyleTitle}>
                <i className={props.icon}></i> &nbsp; {props.textTitle}
            </div>
            <ToolkitProvider
                keyField={props.id}
                data={props.data}
                columns={props.columns}
                search
            >
                {
                    props.showSearch
                        ?
                        props => (
                            <div>

                                <SearchBar {...props.searchProps}
                                    placeholder="Pesquisar..."
                                    className="form-login"
                                />
                                <BootstrapTable

                                    rowStyle={rowStyle}
                                    headerClasses="header-class"
                                    rowClasses="row-class"
                                    striped
                                    hover
                                    bootstrap4
                                    keyField={props.id}
                                    pagination={paginationFactory(options)}
                                    selectRow={selectRow}
                                    {...props.baseProps}
                                />
                            </div>
                        )
                        :
                        props => (
                            <div>
                                <BootstrapTable

                                    rowStyle={rowStyle}
                                    headerClasses="header-class"
                                    rowClasses="row-class"
                                    striped
                                    hover
                                    bootstrap4
                                    keyField={props.id}
                                    pagination={paginationFactory(options)}
                                    selectRow={selectRow}
                                    {...props.baseProps}
                                />
                            </div>
                        )
                }

            </ToolkitProvider>

        </div>
    )

}

export default Table
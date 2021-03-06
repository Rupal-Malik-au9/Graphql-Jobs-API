import styled from 'styled-components'


export const JobsListWrapper = styled.div`
 
.cf:before,
.cf:after {
  content: " ";
  display: table;
}
.cf:after {
  clear: both;
}
.cf {
  *zoom: 1;
}
.wrap {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 5% 0;
  margin-bottom: 5em;
}
.list {
  padding: 1em 0;
}
.listWrap {
  padding: 1rem !important;
}
.list .items {
  display: block;
  width: 100%;
  border-bottom: 2px solid cadetblue;
}
.list .items.even {
  background: #fafafa;
}
.list .items .infoWrap {
  display: table;
  width: 100%;
}
.list .items .listSection {
  display: table-cell;
  vertical-align: middle;
}
.list .items .listSection .itemNumber {
  font-size: 0.75em;
  color: #777;
  margin-bottom: 0.5em;
}
.list .items .listSection h3 {
  font-size: 1em;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}
.list .items .listSection p {
  display: inline-block;
  font-size: 0.85em;
  color: #777;
  font-family: "Montserrat", sans-serif;
}
.list .items .listSection p .quantity {
  font-weight: bold;
  color: #333;
}
.list .items .listSection p.remoteStatus {
  color: cadetblue;
  font-weight: bold;
  padding: 0.5em 0 0 1em;
  text-transform: uppercase;
}
.list .items .listSection .itemImg {
  width: 4em;
  float: left;
}
.list .items .listSection.qtyWrap,
.list .items .listSection.prodTotal {
  text-align: center;
}
.list .items .listSection.qtyWrap p,
.list .items .listSection.prodTotal p {
  font-weight: bold;
  font-size: 1.25em;
}
.list .items .listSection input.qty {
  width: 2em;
  text-align: center;
  font-size: 1em;
  padding: 0.25em;
  margin: 1em 0.5em 0 0;
}
.list .items .listSection {
  width: 8em;
  display: inline;
  padding-right: 1em;
}

 `
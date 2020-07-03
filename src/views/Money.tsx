import styled from "styled-components";
import React from "react";
import Layout from "components/Layout";
import MoneyTags from "../components/money/MoneyTags";
import FormItem from "../components/money/FormItem";
import Types from "../components/money/Types";


const Money = () => {
    return (
        <Layout>
            <MoneyTags/>
            <FormItem/>
            <Types/>
        </Layout>

    )
}

export default Money
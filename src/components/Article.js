import React, {Component} from "react";
import ArticleActions from "./ArticleActions";
import ArticleBody from "./ArticleBody";
import LangContext from "./lang-context";

class Article extends Component {

    render (){
        return (
            <LangContext.Consumer>
                {(context)=>{
                return(
            <div className="wrapper">
            {this.props.children}
            <h1 className="title">{context.title}</h1>
            <div className="article">
            <div className="article__title">
            <h2>{context.article__title}</h2>
          </div>
            <ArticleBody />
            <ArticleActions />

            </div>
            </div>
            );
    }
}
            </LangContext.Consumer>
                
            )
          }
  }
export default Article;



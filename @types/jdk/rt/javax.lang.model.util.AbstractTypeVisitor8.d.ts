declare namespace javax {
    namespace lang {
        namespace model {
            namespace util {
                abstract class AbstractTypeVisitor8<R, P> extends javax.lang.model.util.AbstractTypeVisitor7<R, P> {
                    protected constructor()
                    public abstract visitIntersection(arg0: javax.lang.model.type.IntersectionType, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                interface AbstractTypeVisitor8$$Lambda<R, P> extends javax.lang.model.util.AbstractTypeVisitor7<R, P> {
                    (arg0: javax.lang.model.type.IntersectionType, arg1: P): R
                }
            }
        }
    }
}
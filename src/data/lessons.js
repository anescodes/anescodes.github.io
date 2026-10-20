// src/data/lessons.js
const lessons = [
  {
    id: "linear-regression",
    title: "Introduction to Linear Regression",
    category: "Machine Learning",
    type: "Course Module",
    level: "Beginner",
    readTime: "8 min read",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tags: ["Machine Learning", "Regression", "Python"],
    introduction:
      "Linear regression is a foundational supervised learning algorithm used to model the relationship between quantitative input variables and a continuous numerical target.",
    sections: [
      {
        heading: "1. What is linear regression?",
        paragraphs: [
          "Linear regression models the linear relationship between an input matrix X and a target vector y.",
          "For a single input feature, the model learns a line that minimizes error across all training samples.",
        ],
        equation: "ŷ = wx + b",
        paragraphs2: [
          "Here, w is the learned weight or slope, b is the bias intercept, and ŷ is the predicted model estimate.",
        ],
      },
      {
        heading: "2. The objective function",
        paragraphs: [
          "The model optimizes parameter settings by minimizing a loss function. The standard choice for regression is Mean Squared Error (MSE).",
        ],
        equation: "MSE = (1/n) Σᵢ₌₁ⁿ (yᵢ − ŷᵢ)²",
        bullets: [
          "yᵢ is the true ground truth label.",
          "ŷᵢ is the model prediction.",
          "n is the total number of training instances.",
        ],
      },
      {
        heading: "3. Python implementation",
        paragraphs: [
          "Scikit-learn provides an optimized C-backed implementation of ordinary least squares linear regression.",
        ],
        code: `import numpy as np
from sklearn.linear_model import LinearRegression

X = np.array([[1], [2], [3], [4]])
y = np.array([3, 5, 7, 9])

model = LinearRegression()
model.fit(X, y)

print("Weight (w):", model.coef_[0])
print("Bias (b):", model.intercept_)
print("Prediction for X=5:", model.predict([[5]])[0])`,
      },
    ],
    references: [
      {
        label: "Scikit-learn: Linear Models Documentation",
        url: "https://scikit-learn.org/stable/modules/linear_model.html",
      },
    ],
  },
  {
    id: "gradient-descent",
    title: "Understanding Gradient Descent Optimization",
    category: "Mathematics",
    type: "Academic Note",
    level: "Intermediate",
    readTime: "7 min read",
    status: "In progress",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    tags: ["Mathematics", "Calculus", "Optimization"],
    introduction:
      "Gradient descent is an iterative optimization algorithm used to compute optimal model weights by navigating along the gradient of a cost function.",
    sections: [
      {
        heading: "1. Core mathematical principle",
        paragraphs: [
          "Gradient descent evaluates the partial derivatives of a cost function to identify the direction of steepest local ascent, updating parameters in the exact opposite direction.",
        ],
        equation: "θₜ₊₁ = θₜ − α ∇J(θₜ)",
        bullets: [
          "θ represents the parameter vector.",
          "α is the learning rate hyperparameter.",
          "∇J(θ) is the gradient vector of loss J with respect to θ.",
        ],
      },
      {
        heading: "2. Selecting learning rate α",
        paragraphs: [
          "Selecting an inappropriate learning rate significantly degrades model optimization.",
        ],
        bullets: [
          "Small learning rate: High convergence stability, but slow update progress.",
          "Optimal learning rate: Steady, monotonically decreasing loss trajectory.",
          "Large learning rate: Overshooting local minima, risk of numerical divergence.",
        ],
      },
      {
        heading: "3. Python implementation from scratch",
        paragraphs: [
          "Below is an explicit implementation finding the global minimum of quadratic scalar loss f(x) = x².",
        ],
        code: `x = 5.0  # Initial parameter guess
learning_rate = 0.1

for step in range(50):
    gradient = 2 * x  # Derivative d/dx of x^2
    x = x - learning_rate * gradient

print("Optimized value x ≈", round(x, 6))`,
      },
    ],
    references: [
      {
        label: "Scikit-learn: Stochastic Gradient Descent Guide",
        url: "https://scikit-learn.org/stable/modules/sgd.html",
      },
    ],
  },
];

export default lessons;